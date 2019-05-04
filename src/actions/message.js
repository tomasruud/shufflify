import { MESSAGE_CLEAR, MESSAGE_SET } from '../constants/actions'

export const set = message => ({
  type: MESSAGE_SET,
  payload: message
})

export const clear = () => ({
  type: MESSAGE_CLEAR
})
