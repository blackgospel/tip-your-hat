import { ApolloServer } from 'apollo-server-lambda'
import httpHeadersPlugin from 'apollo-server-plugin-http-headers'
import { config } from 'aws-sdk'
import 'reflect-metadata'
import { AuthResolver } from 'resolvers/auth/auth.controller'
import { UserResolver } from 'resolvers/users/users.controller'
import { buildSchemaSync } from 'type-graphql'
import {
  authorizationChecker,
  cookieParser,
} from './middleware/auth-middleware'

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
    authChecker: authorizationChecker,
    authMode: 'null',
  }),
  plugins: [httpHeadersPlugin],
  context: ({ event, context }) => ({
    event,
    context,
    setCookies: new Array(),
    setHeaders: new Array(),
  }),
  // formatError: (err) => {
  //   if (err instanceof CustomError) {
  //     console.log('err', err)
  //     console.log('err', { errors: err.serializeErrors() })
  //     return err
  //   }
  //   return err
  // },
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
