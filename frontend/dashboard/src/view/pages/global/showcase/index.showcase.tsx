import { VSpacing } from 'view/atomic'
import ShowcaseButtons from './components/buttons/showcase.buttons'
import ShowcaseInput from './components/input/showcase.inputs'
import ShowcaseSpacing from './components/spacing/showcase.spacing'
import ShowcaseTable from './components/table/showcase.table'
import ShowcaseTypography from './components/typography/showcase.typography'
import { ShowcaseContainer, ShowcaseSection } from './index.styles'

const Showcase: React.FC = () => {
  return (
    <ShowcaseContainer>
      <ShowcaseSection>
        <ShowcaseButtons />
      </ShowcaseSection>
      <VSpacing space="medium" />
      <ShowcaseSection>
        <ShowcaseTypography />
      </ShowcaseSection>
      <VSpacing space="medium" />
      <ShowcaseSection>
        <ShowcaseSpacing />
      </ShowcaseSection>
      <VSpacing space="medium" />
      <ShowcaseSection>
        <ShowcaseInput />
      </ShowcaseSection>
      <VSpacing space="medium" />
      <ShowcaseSection>
        <ShowcaseTable />
      </ShowcaseSection>
      <VSpacing space="large" />
    </ShowcaseContainer>
  )
}

export default Showcase
