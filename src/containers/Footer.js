import { connect } from 'react-redux'
import info from '../../package.json'
import Footer from '../components/Footer'

const mapState = () => ({
  version: info.version
})

export default connect(mapState)(Footer)
