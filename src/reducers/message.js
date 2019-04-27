import { handleActions } from 'redux-actions'
import { clear, set } from '../actions/message'

const defaultState = {
  message: ''
}

const reducer = handleActions(
  {
    [clear]: state => ({
      ...state,
      message: ''
    }),

    [set]: (state, action) => ({
      ...state,
      message: action.payload
    })
  },
  defaultState
)

export default reducer
