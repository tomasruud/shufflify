interface Set {
  type: 'message/SET'
  message?: string
}

export type Action = Set

export const set = (message: string): Action => ({
  type: 'message/SET',
  message
})

export const clear = (): Action => ({
  type: 'message/SET'
})
