import type { AWS } from '@serverless/typescript'

const serverlessConfiguration: AWS = {
  service: 'tip-your-hat',
  frameworkVersion: '2',
  plugins: [
    'serverless-esbuild',
    'serverless-dynamodb-local',
    'serverless-offline',
  ],
  package: {
    individually: true,
  },
  custom: {
    'serverless-offline': {
      useChildProcesses: true,
      noPrependStageInUrl: true,
      disableCookieValidation: true,
      enforceSecureCookies: false,
    },
    esbuild: {
      bundle: true,
      sourcemap: true,
      tsconfig: './tsconfig.json',
      plugins: './esbuild.plugins.js',
    },
    dynamodb: {
      stages: ['dev'],
      start: {
        migrate: true,
        seed: true,
      },
      seed: {
        domain: {
          sources: [
            {
              table: 'testTable',
              sources: ['./table-seed.json'],
            },
          ],
        },
      },
    },
  },
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  functions: {
    graphql: {
      handler: `${__dirname
        .split(process.cwd())[1]
        .substring(1)}src/index.handler`,
      environment: {
        JWT_ACCESS_TOKEN: 'come',
        JWT_REFRESH_TOKEN: 'through',
        JWT_COOKIE_TOKEN: 'jid',
        ACCESS_KEY: 'xxxxxxxxxx',
        SECRET_KEY: 'xxxxxxxxxx',
        AWS_REGION: 'localhost',
        AWS_DYNAMO_ENDPOINT: 'http://localhost:8000',
        TABLE_NAME: 'testTable',
      },
      events: [
        {
          http: {
            method: 'ANY',
            path: 'graphql',
            cors: true,
          },
        },
      ],
    },
  },
  resources: {
    Resources: {
      testTable: {
        Type: 'AWS::DynamoDB::Table',
        Properties: {
          TableName: 'testTable',
          AttributeDefinitions: [
            { AttributeName: 'pk', AttributeType: 'S' },
            { AttributeName: 'sk', AttributeType: 'S' },
            { AttributeName: 'entity', AttributeType: 'S' },
            { AttributeName: 'email', AttributeType: 'S' },
          ],
          KeySchema: [
            { AttributeName: 'pk', KeyType: 'HASH' },
            { AttributeName: 'sk', KeyType: 'RANGE' },
          ],
          ProvisionedThroughput: {
            ReadCapacityUnits: 3,
            WriteCapacityUnits: 3,
          },
          GlobalSecondaryIndexes: [
            {
              IndexName: 'entityGSI',
              KeySchema: [
                { AttributeName: 'entity', KeyType: 'HASH' },
                { AttributeName: 'pk', KeyType: 'RANGE' },
              ],
              Projection: {
                ProjectionType: 'ALL',
              },
              ProvisionedThroughput: {
                ReadCapacityUnits: 3,
                WriteCapacityUnits: 3,
              },
            },
            {
              IndexName: 'keyReverseGSI',
              KeySchema: [
                { AttributeName: 'sk', KeyType: 'HASH' },
                { AttributeName: 'pk', KeyType: 'RANGE' },
              ],
              Projection: {
                ProjectionType: 'ALL',
              },
              ProvisionedThroughput: {
                ReadCapacityUnits: 3,
                WriteCapacityUnits: 3,
              },
            },
            {
              IndexName: 'userEmailGSI',
              KeySchema: [
                { AttributeName: 'email', KeyType: 'HASH' },
                { AttributeName: 'pk', KeyType: 'RANGE' },
              ],
              Projection: {
                ProjectionType: 'ALL',
              },
              ProvisionedThroughput: {
                ReadCapacityUnits: 3,
                WriteCapacityUnits: 3,
              },
            },
          ],
        },
      },
      testTipTable: {
        Type: 'AWS::DynamoDB::Table',
        Properties: {
          TableName: 'testTipTable',
          AttributeDefinitions: [
            { AttributeName: 'pk', AttributeType: 'S' },
            { AttributeName: 'sk', AttributeType: 'S' },
          ],
          KeySchema: [
            { AttributeName: 'pk', KeyType: 'HASH' },
            { AttributeName: 'sk', KeyType: 'RANGE' },
          ],
          ProvisionedThroughput: {
            ReadCapacityUnits: 3,
            WriteCapacityUnits: 3,
          },
        },
      },
    },
  },
}

module.exports = serverlessConfiguration
