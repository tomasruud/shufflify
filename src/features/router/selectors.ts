import { State } from './reducer'

export const param = (state: State, key: string) => state.params[key]

export const path = (state: State) => state.path
