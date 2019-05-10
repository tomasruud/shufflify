import Types from 'prop-types'

const trackFeatures = Types.shape({
  acousticness: Types.number.isRequired,
  bpm: Types.number.isRequired,
  danceability: Types.number.isRequired,
  energy: Types.number.isRequired,
  instrumentalness: Types.number.isRequired,
  key: Types.number.isRequired,
  liveness: Types.number.isRequired,
  major: Types.bool.isRequired,
  positivity: Types.number.isRequired,
  speechiness: Types.number.isRequired
})

export default trackFeatures