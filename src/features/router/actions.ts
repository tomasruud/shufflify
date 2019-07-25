import { Params } from './models'

interface Navigate {
  type: 'router/NAVIGATE'
  path: string,
  params: Params
}

export type Action = Navigate

export const navigate = (path: string, params = {}): Navigate => ({
  type: 'router/NAVIGATE',
  path,
  params
})
