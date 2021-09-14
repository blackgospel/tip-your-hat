import { ExtendButtonBase, Fab as MuiFab, FabTypeMap } from '@material-ui/core'
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

const Fab: React.FC<FabProps> = ({ children, size, x, y, onClick }) => {
  return (
    <FabContainer x={x} y={y}>
      <MuiFab size={size} onClick={onClick}>
        <FabWrapper>{children}</FabWrapper>
      </MuiFab>
    </FabContainer>
  )
}

export default Fab
