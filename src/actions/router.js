// @flow
import type { Action } from './types'

export const navigate = (path: string, params: {} = {}): Action => ({
  type: 'ROUTER_NAVIGATE',
  path,
  params
})
