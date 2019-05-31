// @flow
import type { User } from '../common'
import type { State } from '../reducers'

export const token = (state: State): ?string => state.session.token

export const user = (state: State): ?User => state.session.user

export const loading = (state: State): boolean => state.session.loading

export const hasToken = (state: State): boolean => token(state) != null

export const authenticated = hasToken
