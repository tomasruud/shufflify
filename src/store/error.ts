import { Middleware } from 'redux'
import { message } from '../features'

const errorHandler: Middleware = ({ dispatch }) => next => async action => {
  try {
    return await next(action)
  } catch (err) {
    console.error(err)

    dispatch(
      message.actions.set('Could not finish this action because of an error')
    )
  }
}

export default errorHandler
