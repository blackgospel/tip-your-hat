import * as aws from '@pulumi/aws'
import * as awsx from '@pulumi/awsx'
import * as pulumi from '@pulumi/pulumi'
import * as mime from 'mime'
import { crawlDirectory } from './helpers/generic'

const testTable = new aws.dynamodb.Table('testTable', {
  hashKey: 'pk',
  rangeKey: 'sk',
  attributes: [
    {
      name: 'pk',
      type: 'S',
    },
    {
      name: 'sk',
      type: 'S',
    },
    {
      name: 'entity',
      type: 'S',
    },
    {
      name: 'email',
      type: 'S',
    },
  ],
  globalSecondaryIndexes: [
    {
      name: 'entityGSI',
      hashKey: 'entity',
      rangeKey: 'pk',
      projectionType: 'ALL',
      readCapacity: 5,
      writeCapacity: 5,
    },
    {
      name: 'keyReverseGSI',
      hashKey: 'sk',
      rangeKey: 'pk',
      projectionType: 'ALL',
      readCapacity: 5,
      writeCapacity: 5,
    },
    {
      name: 'userEmailGSI',
      hashKey: 'email',
      rangeKey: 'pk',
      projectionType: 'ALL',
      readCapacity: 5,
      writeCapacity: 5,
    },
  ],
  tags: {
    Environment: 'test',
    Name: 'tip-your-hat-table',
  },
  readCapacity: 5,
  writeCapacity: 5,
})

// Create the role for the Lambda to assume
const lambdaRole = new aws.iam.Role('lambdaRole', {
  assumeRolePolicy: {
    Version: '2012-10-17',
    Statement: [
      {
        Action: 'sts:AssumeRole',
        Principal: {
          Service: 'lambda.amazonaws.com',
        },
        Effect: 'Allow',
        Sid: '',
      },
    ],
  },
})

// Attach the fullaccess policy to the Lambda role created above
const rolepolicyattachment = new aws.iam.RolePolicyAttachment(
  'lambdaRoleAttachment',
  {
    role: lambdaRole,
    policyArn: aws.iam.ManagedPolicy.AWSLambdaBasicExecutionRole,
  }
)

const rolepolicyattachment2 = new aws.iam.RolePolicyAttachment(
  'lambdaRoleAttachment2',
  {
    role: lambdaRole,
    policyArn: aws.iam.ManagedPolicy.AWSLambdaDynamoDBExecutionRole,
  }
)

// Create the Lambda to execute
const lambda = new aws.lambda.Function('lambdaFunction', {
  code: pulumi.output(
    new pulumi.asset.AssetArchive({
      '.': new pulumi.asset.FileArchive(process.env.BACKEND_BUILD_DIR!),
    })
  ),
  runtime: aws.lambda.Runtime.NodeJS14dX,
  role: lambdaRole.arn,
  handler: 'index.handler',
  environment: {
    variables: {
      JWT_ACCESS_TOKEN: 'naomi',
      JWT_REFRESH_TOKEN: 'shaw',
      JWT_COOKIE_TOKEN: 'jid',
      ACCESS_KEY: 'AKIA3TA2JVTYS473XJUR',
      SECRET_KEY: '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',
      TABLE_NAME: testTable.name,
    },
  },
})

// Give API Gateway permissions to invoke the Lambda
const lambdapermission = new aws.lambda.Permission('lambdaPermission', {
  action: 'lambda:InvokeFunction',
  principal: 'apigateway.amazonaws.com',
  function: lambda,
})

// Set up the API Gateway
const apigw = new aws.apigatewayv2.Api('httpApiGateway', {
  protocolType: 'HTTP',
  routeKey: 'ANY /graphql',
  target: lambda.invokeArn,
})

// contentBucket is the S3 bucket that the website's contents will be stored in.
const contentBucket = new aws.s3.Bucket('contentBucket', {
  acl: 'public-read',
  // Configure S3 to serve bucket contents as a website. This way S3 will automatically convert
  // requests for "foo/" to "foo/index.html".
  website: {
    indexDocument: 'index.html',
    errorDocument: 'index.html',
  },
})

// Sync the contents of the source directory with the S3 bucket, which will in-turn show up on the CDN.
const webContentsRootPath = process.env.ADMIN_FRONTEND_BUILD_DIR!
crawlDirectory(webContentsRootPath, (filePath: string) => {
  const relativeFilePath = filePath.replace(webContentsRootPath + '/', '')
  const contentFile = new aws.s3.BucketObject(
    relativeFilePath,
    {
      key: relativeFilePath,

      acl: 'public-read',
      bucket: contentBucket,
      contentType: mime.getType(filePath) || undefined,
      source: new pulumi.asset.FileAsset(filePath),
    },
    {
      parent: contentBucket,
    }
  )
})

const cdn = new aws.cloudfront.Distribution('cdn', {
  enabled: true,
  // We only specify one origin for this distribution, the S3 content bucket.
  origins: [
    {
      originId: contentBucket.arn,
      domainName: contentBucket.websiteEndpoint,
      customOriginConfig: {
        // Amazon S3 doesn't support HTTPS connections when using an S3 bucket configured as a website endpoint.
        originProtocolPolicy: 'http-only',
        httpPort: 80,
        httpsPort: 443,
        originSslProtocols: ['TLSv1.2'],
      },
    },
  ],
  customErrorResponses: [
    { errorCode: 404, responseCode: 404, responsePagePath: '/index.html' },
  ],
  defaultRootObject: 'index.html',
  defaultCacheBehavior: {
    targetOriginId: contentBucket.arn,

    viewerProtocolPolicy: 'redirect-to-https',
    allowedMethods: ['GET', 'HEAD', 'OPTIONS'],
    cachedMethods: ['GET', 'HEAD', 'OPTIONS'],

    forwardedValues: {
      cookies: { forward: 'none' },
      queryString: false,
    },

    minTtl: 0,
    defaultTtl: 600,
    maxTtl: 600,
  },
  // "All" is the most broad distribution, and also the most expensive.
  // "100" is the least broad, and also the least expensive.
  priceClass: 'PriceClass_100',
  restrictions: {
    geoRestriction: {
      restrictionType: 'whitelist',
      locations: ['US', 'CA', 'GB', 'DE'],
    },
  },
  tags: {
    Name: 'CDN for admin website',
    Environment: 'test',
  },
  viewerCertificate: {
    cloudfrontDefaultCertificate: true,
  },
})

export const endpoint = apigw.apiEndpoint
export const contentBucketUri = pulumi.interpolate`s3://${contentBucket.bucket}`
export const contentBucketWebsiteEndpoint = contentBucket.websiteEndpoint
export const cloudFrontDomain = cdn.domainName
