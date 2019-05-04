import { set } from '../actions/message'

const errorHandler = ({ dispatch }) => next => async action => {
  try {
    return await next(action)
  } catch (err) {
    console.error(err)
    dispatch(set('An error occurred!'))
  }
}

export default errorHandler
