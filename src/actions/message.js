// @flow
import type { Action } from './types'

export const set = (message: string): Action => ({
  type: 'MESSAGE_SET',
  message
})

export const clear = (): Action => ({
  type: 'MESSAGE_CLEAR'
})
