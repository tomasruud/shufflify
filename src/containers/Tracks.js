import { connect } from 'react-redux'
import { load } from '../actions/tracks'
import { playlistById } from '../selectors/playlists'
import { loading, tracks } from '../selectors/tracks'
import { params } from '../selectors/router'
import Tracks from '../components/Tracks'

const mapDispatch = dispatch => ({
  loadTracks: playlistID => dispatch(load(playlistID))
})

const mapState = state => ({
  playlistID: params(state).id,
  playlist: playlistById(state, params(state).id),
  tracks: tracks(state),
  isLoading: loading(state)
})

export default connect(
  mapState,
  mapDispatch
)(Tracks)
