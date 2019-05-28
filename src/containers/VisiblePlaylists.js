import { connect } from 'react-redux'

import { playlists } from '../selectors'
import { PlaylistList } from '../components'

const mapState = state => ({
  playlists: playlists.visible(state)
})

export default connect(mapState)(PlaylistList)
