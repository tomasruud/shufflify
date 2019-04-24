import { connect } from 'react-redux'
import { authenticated, loading } from '../selectors/session'
import { loadToken, redirectToAuthentication } from '../actions/session'
import Login from '../components/Login'

const mapState = state => ({
  isAuthenticated: authenticated(state),
  isLoading: loading(state)
})

const mapDispatch = dispatch => ({
  checkAuthentication: () => dispatch(loadToken()),
  authenticate: () => dispatch(redirectToAuthentication())
})

export default connect(
  mapState,
  mapDispatch
)(Login)
