import { connect } from 'react-redux'
import { visiblePlaylists } from '../selectors/playlists'
import PlaylistList from '../components/PlaylistList'

const mapState = state => ({
  playlists: visiblePlaylists(state)
})

export default connect(mapState)(PlaylistList)
