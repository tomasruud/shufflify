import { connect } from 'react-redux'
import { session } from '../selectors'
import { session as action } from '../actions'
import { Nav } from '../components'

const mapState = state => ({
  isAuthenticated: session.authenticated(state),
  isLoading: session.loading(state)
})

const mapDispatch = dispatch => ({
  authenticate: () => dispatch(action.authenticate())
})

export default connect(
  mapState,
  mapDispatch
)(Nav)
