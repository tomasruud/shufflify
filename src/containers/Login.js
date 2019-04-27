import { connect } from 'react-redux'
import { authenticate } from '../actions/session'
import Login from '../components/Login'

const mapDispatch = dispatch => ({
  authenticate: () => dispatch(authenticate())
})

export default connect(
  null,
  mapDispatch
)(Login)
