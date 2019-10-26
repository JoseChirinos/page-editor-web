import React from 'react'
import PropTypes from 'prop-types'
import './alert.css'
/* Components */
import { Icon } from '@rmwc/icon'

const Alert = (props) => {
  return (
    <div className={props.max ? "alert-container alert-max" : "alert-container"}>
      <div className={`alert-form alert-${props.theme} animated pulse`}>
        {props.message}
        <span className="alert-close" onClick={props.hideAlert}>
          <Icon icon="close" />
        </span>
      </div>
    </div>
  )
}

Alert.propTypes = {
  max: PropTypes.bool,
  message: PropTypes.string,
  theme: PropTypes.string,
  hideAlert: PropTypes.func
}
Alert.defaultProps = {
  max: false,
  message: 'default',
  theme: '',
  hideAlert: () => { }
}

export default Alert