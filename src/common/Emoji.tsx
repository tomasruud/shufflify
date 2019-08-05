import React from 'react'

type Props = {
  emoji: string,
  alt: string
}

const Emoji = ({ emoji, alt }: Props) => (
  <span role='img' aria-label={alt}>
    {emoji}
  </span>
)

export default Emoji
