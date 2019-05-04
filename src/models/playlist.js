import Types from 'prop-types'

const playlist = Types.shape({
  uri: Types.string.isRequired,
  id: Types.string.isRequired,
  ownerId: Types.string.isRequired,
  name: Types.string.isRequired,
  href: Types.string.isRequired,
  image: Types.string,
})

export default playlist