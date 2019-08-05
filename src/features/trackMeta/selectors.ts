export const byID = (state: State, id: ID): ?TrackFeatures => {
  if (state.trackFeatures.byID == null) {
    return undefined
  }

  return state.trackFeatures.byID[id]
}

export const byURI = (state: State, uri: URI): ?TrackFeatures => {
  const t = trackByURI(state, uri)

  if (!t || !t.id) {
    return undefined
  }

  return byID(state, t.id)
}
