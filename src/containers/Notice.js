import React from 'react'
import { connect } from 'react-redux'
import { Message as Alert } from '../components'
import { message } from '../selectors'
import { message as actions } from '../actions'

const Notice = ({ text, isSet, clear, ...rest }) => {
  if (isSet) {
    return <Alert onClear={clear} {...rest}>{text}</Alert>
  }

  return null
}

const mapState = state => ({
  text: message.content(state),
  isSet: message.exists(state)
})

const mapDispatch = dispatch => ({
  clear: () => dispatch(actions.clear())
})

export default connect(
  mapState,
  mapDispatch
)(Notice)
