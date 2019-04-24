import Types from 'prop-types'

const user = Types.shape({
  id: Types.string.isRequired,
  name: Types.string.isRequired,
  image: Types.string
})

export default user