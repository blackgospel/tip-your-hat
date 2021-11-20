import { IconSearch, IconTools, IconUser } from '@tabler/icons'
import Logo from 'assets/images/logo.svg'
import useMuiDialog from 'helpers/hooks/useMuiDialog'
import useMuiMenu from 'helpers/hooks/useMuiMenu'
import * as S from './index.styles'
import DashboardMatchList from './match-list/dashboard.matchList'
import DashboardSearchModal from './search-modal/dashboard.searchModal'

const DashboardHeader: React.FC = () => {
  const { anchorEl, open, handleClick, handleClose } = useMuiMenu()
  const {
    open: searchOpen,
    handleOpen: handleSearchOpen,
    handleClose: handleSearchClose,
  } = useMuiDialog()

  return (
    <S.HeaderContainer>
      <S.ImageContainer>
        <S.Image>
          <Logo />
        </S.Image>
      </S.ImageContainer>
      <S.NavContainer>
        <S.NavItem onClick={handleSearchOpen}>
          <IconSearch />
        </S.NavItem>
        <DashboardMatchList />
        <S.NavGroup>
          <S.NavAvatar onClick={handleClick}>SA</S.NavAvatar>
          <S.NavMenu
            open={open}
            anchorEl={anchorEl}
            handleClose={handleClose}
            options={[
              { icon: <IconUser size={20} />, text: 'Profile' },
              { icon: <IconTools size={20} />, text: 'Settings' },
            ]}
          />
        </S.NavGroup>
      </S.NavContainer>
      <DashboardSearchModal
        {...{
          open: searchOpen,
          onClose: handleSearchClose,
        }}
      />
    </S.HeaderContainer>
  )
}

export default DashboardHeader
