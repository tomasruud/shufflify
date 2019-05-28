import { connect } from 'react-redux'

import { tracks as trackActions } from '../actions'
import { playlists, tracks, router } from '../selectors'
import { Shuffler } from '../components'

const mapDispatch = dispatch => ({
  loadTracks: playlistURI => dispatch(trackActions.load(playlistURI))
})

const mapState = state => ({
  playlist: playlists.byURI(state, router.params(state).uri),
  tracks: tracks.byPlaylistURI(state, router.params(state).uri),
  isLoading: tracks.loading(state)
})

export default connect(
  mapState,
  mapDispatch
)(Shuffler)
