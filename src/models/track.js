import Types from 'prop-types'

const track = Types.shape({
  id: Types.string, // Local files does not have an ID
  index: Types.number.isRequired,
  name: Types.string.isRequired,
  artists: Types.arrayOf(Types.string).isRequired,

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