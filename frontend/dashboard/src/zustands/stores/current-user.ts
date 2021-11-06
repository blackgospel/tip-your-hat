import { ACCESS_TOKEN_KEY } from 'constants/auth'
import jwtDecode from 'jwt-decode'
import { SetState } from 'zustand'
import { create, devtools, immer } from '../index'

interface CurrentUser {
  id: string
  role: number
  name: string
  iat: number
  exp: number
}

type CurrentUserStore = {
  currentUser: CurrentUser | null
  setCurrentUser: (token: string) => void
  removeCurrentUser: () => void
}

const initialState = {
  currentUser: null,
}

const reducer = (set: SetState<CurrentUserStore>) => ({
  ...initialState,

  setCurrentUser: (token: string) => {
    const user = jwtDecode(token)

    if (!user) return

    set((state) => {
      state.currentUser = user as unknown as CurrentUser
    })

    localStorage.setItem(ACCESS_TOKEN_KEY, token)
  },
  removeCurrentUser: () => {
    set((state) => {
      state.currentUser = null
    })
    localStorage.removeItem(ACCESS_TOKEN_KEY)
  },
})

const useCurrentUserStore = create<CurrentUserStore>(immer(devtools(reducer)))

export default useCurrentUserStore
