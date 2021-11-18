import DashboardHeader from './header/dashboard.header'
import { DashboardContainer } from './index.styles'

const DashboardTemplate: React.FC = ({ children }) => {
  return (
    <DashboardContainer>
      <DashboardHeader />
      {children}
    </DashboardContainer>
  )
}

export default DashboardTemplate
