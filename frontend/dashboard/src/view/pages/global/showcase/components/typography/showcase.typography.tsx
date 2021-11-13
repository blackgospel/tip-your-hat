import {
  Anchor,
  CaptionText,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  LargeText,
  MutedText,
  RouterLink,
  SmallText,
  Subtitle,
  Text,
  VSpacing,
} from 'view/atomic'
import { ShowcaseComponents } from '../../index.styles'
import { Container } from './index.styles'

const ShowcaseTypography: React.FC = () => {
  return (
    <Container>
      <H1>Typography</H1>
      <VSpacing space="medium" />
      <ShowcaseComponents>
        <H1>h1. Heading</H1>
      </ShowcaseComponents>
      <VSpacing />
      <ShowcaseComponents>
        <H2>h2. Heading</H2>
      </ShowcaseComponents>
      <VSpacing />
      <ShowcaseComponents>
        <H3>h3. Heading</H3>
      </ShowcaseComponents>
      <VSpacing />
      <ShowcaseComponents>
        <H4>h4. Heading</H4>
      </ShowcaseComponents>
      <VSpacing />
      <ShowcaseComponents>
        <H5>h5. Heading</H5>
      </ShowcaseComponents>
      <VSpacing />
      <ShowcaseComponents>
        <H6>h6. Heading</H6>
      </ShowcaseComponents>
      <VSpacing />
      <ShowcaseComponents>
        <Subtitle>
          subtitle. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Subtitle>
      </ShowcaseComponents>
      <VSpacing />
      <ShowcaseComponents>
        <SmallText>
          small text. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </SmallText>
      </ShowcaseComponents>
      <VSpacing />
      <ShowcaseComponents>
        <Text>
          text. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
      </ShowcaseComponents>
      <VSpacing />
      <ShowcaseComponents>
        <LargeText>
          large text. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </LargeText>
      </ShowcaseComponents>
      <VSpacing />
      <ShowcaseComponents>
        <MutedText>
          muted text. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </MutedText>
      </ShowcaseComponents>
      <VSpacing />
      <ShowcaseComponents>
        <CaptionText>
          caption text. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </CaptionText>
      </ShowcaseComponents>
      <VSpacing />
      <ShowcaseComponents>
        <Anchor href="=">
          anchor link. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Anchor>
      </ShowcaseComponents>
      <VSpacing />
      <ShowcaseComponents>
        <RouterLink to="=">
          router link. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </RouterLink>
      </ShowcaseComponents>
    </Container>
  )
}

export default ShowcaseTypography
