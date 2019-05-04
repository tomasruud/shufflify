import { connect } from 'react-redux'
import { load, setSearch } from '../actions/playlists'
import { loading, search } from '../selectors/playlists'
import Playlists from '../components/Playlists'

const mapDispatch = dispatch => ({
  loadPlaylists: () => dispatch(load()),
  updateSearch: search => dispatch(setSearch(search))
})

const mapState = state => ({
  isLoading: loading(state),
  search: search(state)
})

export default connect(
  mapState,
  mapDispatch
)(Playlists)
