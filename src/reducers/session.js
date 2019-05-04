import { SESSION_BOOTSTRAP_COMPLETE } from '../constants/actions'
import { combineReducers } from 'redux'

const token = (state = null, { type, payload }) => {
  if (type === SESSION_BOOTSTRAP_COMPLETE) {
    return payload.token
  }

  return state
}

const user = (state = {}, { type, payload }) => {
  if (type === SESSION_BOOTSTRAP_COMPLETE) {
    return payload.user
  }

  return state
}

const loading = (state = true, { type }) => {
  if (type === SESSION_BOOTSTRAP_COMPLETE) {
    return false
  }

  return state
}

export default combineReducers({
  token,
  user,
  loading
})
