import { connect } from 'react-redux'

import { Badge } from '../components'
import { session } from '../selectors'

const mapState = state => ({
  image: session.userImage(state),
  name: session.userName(state)
})

export default connect(mapState)(Badge)
