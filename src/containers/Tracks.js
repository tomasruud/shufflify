import { connect } from 'react-redux'
import { load } from '../actions/tracks'
import { byURI } from '../selectors/playlists'
import { loading } from '../selectors/tracks'
import { params } from '../selectors/router'
import Tracks from '../components/Tracks'

const mapDispatch = dispatch => ({
  loadTracks: playlistURI => dispatch(load(playlistURI))
})

const mapState = state => ({
  playlist: byURI(state, params(state).uri),
  isLoading: loading(state)
})

export default connect(
  mapState,
  mapDispatch
)(Tracks)
