// @flow
import type { State } from '../reducers'

export const param = (state: State, key: string): any =>
  state.router.params[key]

export const path = (state: State): string => state.router.path
