import { connect } from 'react-redux'
import { loadTracks } from '../actions/tracks'
import { playlistById } from '../selectors/playlists'
import { error, loading, tracks } from '../selectors/tracks'
import Tracks from '../components/Tracks'

const mapDispatch = (dispatch, { match }) => ({
  loadTracks: () => dispatch(loadTracks(match.params.id))
})

const mapState = (state, { match }) => ({
  playlist: playlistById(state, match.params.id),
  tracks: tracks(state),
  hasError: error(state),
  isLoading: loading(state)
})

export default connect(
  mapState,
  mapDispatch
)(Tracks)
