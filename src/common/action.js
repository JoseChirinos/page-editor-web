import React from 'react'
import PropTypes from 'prop-types'
import '../pages/@style/form.css'
import {
  NavLink
} from 'react-router-dom'

import { Button } from '@rmwc/button';

/* Data */
import { getUrl } from '../pages/@data/get-url'

const Action = ({
  match,
  confirmLabel
}) => {
  let urls = getUrl.parts(match.url)
  let urlCompleted = urls[urls.length - 2]

  return (
    <div className="app-container">
      <div className="app-form--action">
        <Button
          type='submit'
          raised
          style={{
            backgroundColor: '#059805'
          }}
        >
          {confirmLabel}
        </Button>
        <NavLink to={urlCompleted.path}>
          <Button
            type="button"
            style={{
              color: '#000'
            }}
          >
            Cancelar
          </Button>
        </NavLink>
      </div>
    </div>
  )
}

Action.propTypes = {
  match: PropTypes.shape({}).isRequired,
  confirmLabel: PropTypes.string
}
Action.defaultProps = {
  confirmLabel: 'Guardar'
}

export default Action