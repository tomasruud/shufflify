import { Message } from './models'

interface Set {
  type: 'message/SET'
  message: Message
}

interface Clear {
  type: 'message/CLEAR'
}

export type Action = Set | Clear

export const set = (message: Message): Action => ({
  type: 'message/SET',
  message
})

export const clear = (): Action => ({
  type: 'message/CLEAR'
})
