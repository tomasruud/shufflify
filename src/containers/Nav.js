import { connect } from 'react-redux'
import { authenticated, loading } from '../selectors/session'
import { authenticate } from '../actions/session'
import Nav from '../components/Nav'

const mapState = state => ({
  isAuthenticated: authenticated(state),
  isLoading: loading(state),
})

const mapDispatch = dispatch => ({
  authenticate: () => dispatch(authenticate())
})

export default connect(mapState, mapDispatch)(Nav)
