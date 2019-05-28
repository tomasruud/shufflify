import { connect } from 'react-redux'
import { playlists as actions } from '../actions'
import { playlists } from '../selectors'
import { Playlists } from '../components'

const mapDispatch = dispatch => ({
  loadPlaylists: () => dispatch(actions.load()),
  updateSearch: search => dispatch(actions.setSearch(search))
})

const mapState = state => ({
  isLoading: playlists.loading(state),
  search: playlists.search(state)
})

export default connect(
  mapState,
  mapDispatch
)(Playlists)
