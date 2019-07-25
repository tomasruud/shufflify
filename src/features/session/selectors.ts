import { State } from './reducer'

export const token = (state: State) => state.token

export const user = (state: State) => state.user

export const loading = (state: State) => state.loading

export const hasToken = (state: State) => token(state) != null

export const authenticated = hasToken
