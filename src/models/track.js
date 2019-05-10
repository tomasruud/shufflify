import Types from 'prop-types'

const track = Types.shape({
  uri: Types.string.isRequired,
  id: Types.string,
  name: Types.string.isRequired,
  artists: Types.arrayOf(Types.string).isRequired,
  local: Types.bool
})

export default track