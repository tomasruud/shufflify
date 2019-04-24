import { connect } from 'react-redux'
import { loadPlaylists, updatePlaylistsSearch } from '../actions/playlists'
import {
  error,
  loaded,
  loading,
  search,
  visiblePlaylists
} from '../selectors/playlists'
import Playlists from '../components/Playlists'

const mapDispatch = dispatch => ({
  loadPlaylists: () => dispatch(loadPlaylists()),
  updateSearch: search => dispatch(updatePlaylistsSearch(search))
})

const mapState = state => ({
  isLoaded: loaded(state),
  playlists: visiblePlaylists(state),
  hasError: error(state),
  isLoading: loading(state),
  search: search(state)
})

export default connect(
  mapState,
  mapDispatch
)(Playlists)
