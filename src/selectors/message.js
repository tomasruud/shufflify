// @flow
import type { State } from '../reducers'

export const content = (state: State): ?string => state.message.message

export const isSet = (state: State): boolean =>
  content(state) != null && content(state) !== ''
