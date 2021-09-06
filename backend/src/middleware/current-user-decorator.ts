import { ApolloContext } from 'context/apollo.context'
import { createParamDecorator } from 'type-graphql'

const CurrentUser = () => {
  return createParamDecorator<ApolloContext>(
    ({ context }) => context.payload?.id
  )
}

export default CurrentUser
