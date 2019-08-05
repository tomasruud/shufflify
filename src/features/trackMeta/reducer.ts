import { ID, TrackFeatures } from '../../common'
import { combineReducers } from 'redux'

type ByIDMap = {
  [ID]: TrackFeatures
}

const byID = (state: ByIDMap = {}, action: Action): ByIDMap => {
  if (action.type === 'TRACKFEATURES_LOAD_SUCCESS') {
    return {
      ...state,
      ...action.features
    }
  }

  return state
}

const loading = (state: boolean = false, action: Action): boolean => {
  if (action.type === 'TRACKFEATURES_LOAD_REQUEST') {
    return true
  }

  if (action.type === 'TRACKFEATURES_LOAD_SUCCESS') {
    return false
  }

  return state
}

export type State = {
  loading: boolean,
  byID: ByIDMap
}

export default combineReducers({
  loading,
  byID
})
