import { APIGatewayProxyEventV1OrV2 } from 'apollo-server-lambda/dist/ApolloServer'
import { Context } from 'aws-lambda'

export interface ApolloContext {
  event: APIGatewayProxyEventV1OrV2
  context: Context
  setCookies: [any]
  setHeaders: [any]
  payload?: { id: string }
  cookies?: {
    [key: string]: string
  }
}
