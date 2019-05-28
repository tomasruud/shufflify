import { connect } from 'react-redux'
import { Footer } from '../components'

const mapState = () => ({
  version: process.env.REACT_APP_VERSION
})

export default connect(mapState)(Footer)
