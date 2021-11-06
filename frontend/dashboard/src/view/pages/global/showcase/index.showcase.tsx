import { VSpacing } from 'view/atomic'
import ShowcaseButtons from './components/buttons/index.buttons'
import { ShowcaseContainer, ShowcaseSection } from './index.styles'

const Showcase: React.FC = () => {
  return (
    <ShowcaseContainer>
      <ShowcaseSection>
        <ShowcaseButtons />
      </ShowcaseSection>
      <VSpacing />
    </ShowcaseContainer>
  )
}

export default Showcase
