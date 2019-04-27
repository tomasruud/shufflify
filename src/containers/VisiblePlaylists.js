import { connect } from 'react-redux'
import { loaded, loading, visiblePlaylists } from '../selectors/playlists'
import PlaylistList from '../components/PlaylistList'

const mapState = state => ({
  isLoaded: loaded(state),
  playlists: visiblePlaylists(state),
  isLoading: loading(state)
})

export default connect(mapState)(PlaylistList)
