import { useSnackbar, VariantType } from 'notistack'

const useCustomSnackbar = () => {
  const { enqueueSnackbar } = useSnackbar()

  const enqueueCustomSnackbar = (message: string, variant?: VariantType) => {
    enqueueSnackbar(message, { variant })
  }

  return enqueueCustomSnackbar
}

export default useCustomSnackbar
