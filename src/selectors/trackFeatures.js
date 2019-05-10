import { byURI as trackByURI } from './tracks'

export const byID = (state, ID) => state.entities.trackFeatures.byID[ID]

export const byURI = (state, URI) => {
  const t = trackByURI(state, URI)

  if (t.id) {
    return null
  }

  return byID(state, t.id)
}
