import { connect } from 'react-redux'
import * as trackActions from '../actions/tracks'
import * as playlists from '../selectors/playlists'
import * as tracks from '../selectors/tracks'
import * as router from '../selectors/router'
import Shuffler from '../components/Shuffler'

const mapDispatch = dispatch => ({
  loadTracks: playlistURI => dispatch(trackActions.load(playlistURI))
})

const mapState = state => ({
  playlist: playlists.byURI(state, router.params(state).uri),
  isLoading: tracks.loading(state)
})

export default connect(
  mapState,
  mapDispatch
)(Shuffler)
