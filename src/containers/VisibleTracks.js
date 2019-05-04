import { connect } from 'react-redux'
import TrackList from '../components/TrackList'
import { byPlaylistURI } from '../selectors/tracks'
import { params } from '../selectors/router'

const mapState = state => ({
  tracks: byPlaylistURI(state, params(state).uri)
})

export default connect(mapState)(TrackList)
