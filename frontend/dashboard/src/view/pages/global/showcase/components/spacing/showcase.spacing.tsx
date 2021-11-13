import { H1, H2, H3, HSpacing, Spacing, VSpacing } from 'view/atomic'
import { ShowcaseComponents } from '../../index.styles'
import { Container } from './index.styles'

const ShowcaseSpacing: React.FC = () => {
  return (
    <Container>
      <H1>Spacing</H1>
      <VSpacing space="medium" />
      <H3>Small</H3>
      <ShowcaseComponents>
        <H1>Small</H1>
        <Spacing space="small" />
        <H2>Spacing</H2>
      </ShowcaseComponents>
      <VSpacing space="medium" />
      <H3>Medium</H3>
      <ShowcaseComponents>
        <H1>Medium</H1>
        <Spacing space="medium" />
        <H2>Spacing</H2>
      </ShowcaseComponents>
      <VSpacing space="medium" />
      <H3>Large</H3>
      <ShowcaseComponents>
        <H1>Large</H1>
        <Spacing space="large" />
        <H2>Spacing</H2>
      </ShowcaseComponents>
      <VSpacing space="medium" />
      <H1>Vertical Spacing</H1>
      <VSpacing space="medium" />
      <H1>Horizontal Spacing</H1>
      <VSpacing space="medium" />
      <ShowcaseComponents>
        <H1>Horizontal</H1>
        <HSpacing space="medium" />
        <H2>Spacing</H2>
      </ShowcaseComponents>
    </Container>
  )
}

export default ShowcaseSpacing
