import { SetState } from 'zustand'
import { immer, devtools, create } from '../index'
import formatError from 'helpers/generic/formatError'
import { ErrorType, FieldErrorType } from 'view/common/form/index.types'

type FormattedErrorType = FieldErrorType | ErrorType

type AuthStore = {
  error: ErrorType
  fieldError: FieldErrorType
  setError: (type: string, error: FormattedErrorType, toast?: boolean) => void
}

const initialState = {
  error: null,
  fieldError: null,
}

const reducer = (set: SetState<AuthStore>) => ({
  ...initialState,

  resetErrors: () => {
    set((state) => {
      state.error = null
      state.fieldError = null
    })
  },
  setError: (error: any) => {
    const { type, formattedError } = formatError(error.response.data.errors)

    set((state) => {
      state.error = type === 'error' ? formattedError : null
      state.fieldError = type === 'fieldError' ? formattedError : null
    })
  },
})

const useAuthStore = create<AuthStore>(immer(devtools(reducer)))

export default useAuthStore
