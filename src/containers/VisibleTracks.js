import { connect } from 'react-redux'

import { tracks, router } from '../selectors'
import { TrackList } from '../components'

const mapState = state => ({
  tracks: tracks.byPlaylistURI(state, router.params(state).uri)
})

export default connect(mapState)(TrackList)
