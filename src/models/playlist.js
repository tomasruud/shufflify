import Types from 'prop-types'

const playlist = Types.shape({
  id: Types.string.isRequired,
  ownerId: Types.string.isRequired,
  name: Types.string.isRequired,
  uri: Types.string.isRequired,
  href: Types.string.isRequired,
  image: Types.string,
})

export default playlist