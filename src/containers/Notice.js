import React from 'react'
import { connect } from 'react-redux'
import Alert from '../components/Message'
import { hasMessage, message } from '../selectors/message'
import { clear } from '../actions/message'

const Notice = ({ text, isSet, clear, ...rest }) => {
  if (isSet) {
    return <Alert onClear={clear} {...rest}>{text}</Alert>
  }

  return null
}

const mapState = state => ({
  text: message(state),
  isSet: hasMessage(state)
})

const mapDispatch = dispatch => ({
  clear: () => dispatch(clear())
})

export default connect(
  mapState,
  mapDispatch
)(Notice)
