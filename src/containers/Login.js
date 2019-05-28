import { connect } from 'react-redux'
import { session } from '../actions'
import { Login } from '../components'

const mapDispatch = dispatch => ({
  authenticate: () => dispatch(session.authenticate())
})

export default connect(
  null,
  mapDispatch
)(Login)
