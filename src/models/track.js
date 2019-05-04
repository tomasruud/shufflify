import Types from 'prop-types'

const track = Types.shape({
  uri: Types.string.isRequired,
  id: Types.string,
  name: Types.string.isRequired,
  artists: Types.arrayOf(Types.string).isRequired,
  local: Types.bool,

  features: Types.shape({
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
})

export default track