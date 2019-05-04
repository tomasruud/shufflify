import { combineReducers } from 'redux'

import session from './session'
import router from './router'
import message from './message'
import entities from './entities'

const root = combineReducers({
  session,
  message,
  router,
  entities
})

export default root