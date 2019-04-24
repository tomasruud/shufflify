import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { authenticated } from '../selectors/session'
import AuthRoute from '../components/AuthRoute'

const state = state => ({
  isAuthenticated: authenticated(state),
  redirect: '/login'
})

export default withRouter(connect(state)(AuthRoute))
