import { createAction } from 'redux-actions'

export const set = createAction('MESSAGE_SET', message => message)

export const clear = createAction('MESSAGE_CLEAR')
