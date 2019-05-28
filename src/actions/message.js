// @flow
import { MESSAGE_CLEAR, MESSAGE_SET } from '../constants'

export type SetAction = {
  +type: string,
  +message: string
}

export type ClearAction = {
  +type: string
}

export const set = (message: string): SetAction => ({
  type: MESSAGE_SET,
  message
})

export const clear = (): ClearAction => ({
  type: MESSAGE_CLEAR
})
