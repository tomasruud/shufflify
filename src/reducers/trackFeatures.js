import { combineReducers } from 'redux'
import {
  TRACKFEATURES_LOAD_REQUEST,
  TRACKFEATURES_LOAD_SUCCESS
} from '../constants/actions'

const byID = (state = {}, {type, payload}) => {
  if (type === TRACKFEATURES_LOAD_SUCCESS) {
    return {
      ...state,
      ...payload
    }
  }

  return state
}

const loading = (state = false, { type }) => {
  if (type === TRACKFEATURES_LOAD_REQUEST) {
    return true
  } else if (type === TRACKFEATURES_LOAD_SUCCESS) {
    return false
  }

  return state
}

export default combineReducers({
  loading,
  byID
})
