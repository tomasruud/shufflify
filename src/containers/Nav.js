import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { authenticated, loading } from '../selectors/session'
import { redirectToAuthentication } from '../actions/session'
import Nav from '../components/Nav'

const mapState = state => ({
  isAuthenticated: authenticated(state),
  isLoading: loading(state),
})

const mapDispatch = dispatch => ({
  authenticate: () => dispatch(redirectToAuthentication())
})

export default withRouter(connect(mapState, mapDispatch)(Nav))
