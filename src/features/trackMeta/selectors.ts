import { State } from './reducer'
import { TrackMeta } from './models'

export const byID = (state: State, id: string): TrackMeta | null => {
  if (state.byID == null) {
    return null
  }

  return state.byID[id]
}
