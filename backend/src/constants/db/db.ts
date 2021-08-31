import { DynamoDB } from 'aws-sdk'

export const dbKeySplit = '#'

export const dbTableName = process.env.TABLE_NAME || 'testTable'

export const documentClient: DynamoDB = new DynamoDB({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  region: process.env.AWS_REGION,
  endpoint: process.env.AWS_DYNAMO_ENDPOINT,
})
