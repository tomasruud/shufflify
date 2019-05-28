import { ROUTER_NAVIGATE } from '../constants'

export const navigate = (path, params = {}) => ({
  type: ROUTER_NAVIGATE,
  payload: {
    path,
    params
  }
})
