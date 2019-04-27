import { connect } from 'react-redux'
import { load, setSearch } from '../actions/playlists'
import { loaded, loading, search } from '../selectors/playlists'
import Playlists from '../components/Playlists'

const mapDispatch = dispatch => ({
  loadPlaylists: () => dispatch(load()),
  updateSearch: search => dispatch(setSearch(search))
})

const mapState = state => ({
  isLoaded: loaded(state),
  isLoading: loading(state),
  search: search(state)
})

export default connect(
  mapState,
  mapDispatch
)(Playlists)
