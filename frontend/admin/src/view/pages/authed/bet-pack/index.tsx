import { Title } from 'view/common/global/title'
import useCurrentUserStore from 'zustands/stores/current-user'
import { BetPackContainer } from './index.styles'

const BetPack: React.FC = () => {
  const { currentUser } = useCurrentUserStore()

  return (
    <BetPackContainer>
      <Title subtitle>Welcome back, {currentUser?.name}! 🙏🏾</Title>
    </BetPackContainer>
  )
}

export default BetPack
