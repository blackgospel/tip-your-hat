import { Helmet } from 'react-helmet-async'
import * as S from './index.styles'

interface PageProps {
  title: string
}

const Page: React.FC<PageProps> = ({ children, title, ...otherProps }) => {
  return (
    <S.PageContainer {...otherProps}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </S.PageContainer>
  )
}

export default Page
