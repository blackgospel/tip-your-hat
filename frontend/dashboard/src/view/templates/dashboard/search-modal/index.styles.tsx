import MuiDialog from '@mui/material/Dialog'
import MuiSlide from '@mui/material/Slide'
import { TransitionProps as MuiTransitionProps } from '@mui/material/transitions'
import { forwardRef, ReactElement, Ref } from 'react'
import styled from 'styled-components/macro'

const Transition = forwardRef(
  (
    props: MuiTransitionProps & { children: ReactElement<any, any> },
    ref: Ref<unknown>
  ) => {
    return <MuiSlide direction="down" ref={ref} {...props} />
  }
)

Transition.displayName = 'Transition'

export const DashboardSearchModalContainer = styled(
  ({ children, onClose, ...otherProps }) => (
    <MuiDialog
      fullWidth
      maxWidth="md"
      TransitionComponent={Transition}
      onClose={onClose}
      sx={{
        '& .MuiDialog-scrollPaper': {
          alignItems: 'flex-start',
        },
      }}
      {...otherProps}
    >
      {children}
    </MuiDialog>
  )
)``
