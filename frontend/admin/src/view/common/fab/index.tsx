import { ExtendButtonBase, Fab, FabTypeMap } from '@material-ui/core'
import { FabContainer, FabWrapper } from './index.styles'

interface FabProps
  extends Partial<
    ExtendButtonBase<FabTypeMap<Record<string, never>, 'button'>>
  > {
  size?: 'small' | 'medium' | 'large'
  x?: 'left' | 'center' | 'right'
  y?: 'top' | 'center' | 'bottom'
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const FloatingActionButton: React.FC<FabProps> = ({
  children,
  size = 'medium',
  x,
  y,
  onClick,
}) => {
  return (
    <FabContainer x={x} y={y}>
      <Fab size={size} color="primary" onClick={onClick}>
        <FabWrapper>{children}</FabWrapper>
      </Fab>
    </FabContainer>
  )
}

export default FloatingActionButton
