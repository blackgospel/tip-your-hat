import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-lambda'
import { buildSchemaSync } from 'type-graphql'
import { UserResolver } from 'resolvers/users/users.controller'
import { AuthResolver } from 'resolvers/auth/auth.controller'
import httpHeadersPlugin from 'apollo-server-plugin-http-headers'
import { cookieParser } from './middleware/auth'
import { config } from 'aws-sdk'

config.update({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  region: process.env.AWS_REGION,
})

const app = new ApolloServer({
  schema: buildSchemaSync({
    resolvers: [AuthResolver, UserResolver],
    globalMiddlewares: [cookieParser],
    validate: false,
  }),
  plugins: [httpHeadersPlugin],
  context: ({ event, context }) => ({
    event,
    context,
    setCookies: new Array(),
    setHeaders: new Array(),
  }),
})

export const handler = app.createHandler({
  expressGetMiddlewareOptions: {
    cors: {
      origin: [
        'localhost:1234',
        'http://localhost:1234',
        'd3609ksraw681r.cloudfront.net',
        'http://d3609ksraw681r.cloudfront.net',
        'https://d3609ksraw681r.cloudfront.net',
      ],
      credentials: true,
    },
  },
})
