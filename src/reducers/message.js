import { combineReducers } from 'redux'
import { MESSAGE_CLEAR, MESSAGE_SET } from '../constants/actions'

const message = (state = null, { type, payload }) => {
  if (type === MESSAGE_SET) {
    return payload
  } else if (type === MESSAGE_CLEAR) {
    return null
  }

  return state
}

export default combineReducers({
  message
})
