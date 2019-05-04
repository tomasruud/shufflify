import { combineReducers } from 'redux'
import { ROUTER_NAVIGATE } from '../constants/actions'

const path = (state = '', { type, payload }) => {
  if (type === ROUTER_NAVIGATE) {
    return payload.path
  }

  return state
}

const params = (state = {}, { type, payload }) => {
  if (type === ROUTER_NAVIGATE) {
    return payload.params
  }

  return state
}

export default combineReducers({
  path,
  params
})
