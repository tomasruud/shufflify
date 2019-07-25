import { State } from './reducer'

export const content = (state: State) => state.message

export const isSet = (state: State): boolean =>
  content(state) != null && content(state) !== ''