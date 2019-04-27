import React from 'react'
import PropTypes from 'prop-types'

const Emoji = ({ emoji, alt }) => (
  <span role='img' aria-label={alt}>
    {emoji}
  </span>
)

Emoji.propTypes = {
  emoji: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Emoji
