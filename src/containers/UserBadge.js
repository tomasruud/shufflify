import { connect } from 'react-redux'
import Badge from '../components/Badge'
import { userImage, userName } from '../selectors/session'

const mapState = state => ({
  image: userImage(state),
  name: userName(state)
})

export default connect(mapState)(Badge)
