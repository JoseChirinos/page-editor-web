import React from 'react'
import PropTypes from 'prop-types'
import './remove.css'
import '../pages/@style/container.css'
import '../pages/@style/form.css'
/* Components */
import { Button } from '@rmwc/button'

const Remove = (props) => (
  <div className="Remove-container">
    <fieldset className="app-form--fieldset">
      <legend>
        Zona de Peligro
      </legend>
      <h6 className="app-form--helper">{props.text}</h6>
      <br />
      <Button type="button" onClick={props.handleEvent}>
        {props.label}
      </Button>
    </fieldset>
  </div>
)

Remove.propTypes = {
  text: PropTypes.string,
  label: PropTypes.string,
  handleEvent: PropTypes.func
}

Remove.defaultProps = {
  text: '',
  label: '',
  handleEvent: () => { }
}
export default Remove