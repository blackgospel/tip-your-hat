import { Outlet } from 'react-router-dom'
import DashboardHeader from './header/dashboard.header'
import * as S from './index.styles'
import DashboardMain from './main/dashboard.main'

const DashboardTemplate: React.FC = () => {
  return (
    <S.DashboardContainer>
      <DashboardHeader />
      <DashboardMain>
        <Outlet />
      </DashboardMain>
    </S.DashboardContainer>
  )
}

export default DashboardTemplate
