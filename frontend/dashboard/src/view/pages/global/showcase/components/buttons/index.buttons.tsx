import DeleteIcon from '@mui/icons-material/Delete'
import {
  Button,
  H1,
  H3,
  HSpacing,
  LargeButton,
  SmallButton,
  VSpacing,
} from 'view/atomic'
import { ShowcaseComponents } from '../../index.styles'
import { Container } from './index.styles'

const ShowcaseButtons: React.FC = () => {
  return (
    <Container>
      <H1>Button</H1>
      <VSpacing />
      <H3>Size</H3>
      <ShowcaseComponents>
        <SmallButton>Base</SmallButton>
        <HSpacing />
        <Button>Base</Button>
        <HSpacing />
        <LargeButton>Base</LargeButton>
      </ShowcaseComponents>
      <VSpacing space="medium" />
      <H3>Colors</H3>
      <ShowcaseComponents>
        <Button bg="primary">Base</Button>
        <HSpacing />
        <Button bg="secondary">Base</Button>
        <HSpacing />
        <Button bg="success">Base</Button>
        <HSpacing />
        <Button bg="info">Base</Button>
        <HSpacing />
        <Button bg="danger">Base</Button>
        <HSpacing />
        <Button bg="warning">Base</Button>
      </ShowcaseComponents>
      <VSpacing space="medium" />
      <H3>Variants</H3>
      <ShowcaseComponents>
        <Button>Base</Button>
        <HSpacing />
        <Button variant="outlined">Base</Button>
        <HSpacing />
        <Button variant="text">Base</Button>
        <HSpacing />
      </ShowcaseComponents>
      <VSpacing space="medium" />
      <H3>Disabled</H3>
      <ShowcaseComponents>
        <Button disabled>Base</Button>
        <HSpacing />
        <Button variant="outlined" disabled>
          Base
        </Button>
        <HSpacing />
        <Button variant="text" disabled>
          Base
        </Button>
      </ShowcaseComponents>
      <VSpacing space="medium" />
      <H3>Disabled Elevation</H3>
      <ShowcaseComponents>
        <Button disableElevation>Base</Button>
        <HSpacing />
        <Button variant="outlined" disableElevation>
          Base
        </Button>
        <HSpacing />
        <Button variant="text" disableElevation>
          Base
        </Button>
      </ShowcaseComponents>
      <VSpacing space="medium" />
      <H3>Loading</H3>
      <ShowcaseComponents>
        <Button loading={true}>Base</Button>
        <HSpacing />
        <Button variant="outlined" loading={true}>
          Base
        </Button>
        <HSpacing />
        <Button variant="text" loading={true}>
          Base
        </Button>
      </ShowcaseComponents>
      <VSpacing space="medium" />
      <H3>Button with icons</H3>
      <ShowcaseComponents>
        <Button startIcon={<DeleteIcon />}>Base</Button>
        <HSpacing />
        <Button endIcon={<DeleteIcon />} variant="outlined">
          Base
        </Button>
        <HSpacing />
        <Button startIcon={<DeleteIcon />} variant="text">
          Base
        </Button>
      </ShowcaseComponents>
    </Container>
  )
}

export default ShowcaseButtons
