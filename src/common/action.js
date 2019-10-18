import React from 'react'
import '../pages/@style/form.css'
import {
  NavLink
} from 'react-router-dom'

import { Button } from '@rmwc/button';

/* Data */
import { getUrl } from '../pages/@data/get-url'

const Action = (props) => {
  let urls = getUrl.parts(props.match.url)
  let urlCompleted = urls[urls.length - 2]

  return (
    <div className="graduate-form--action">
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
      <Button
        type='submit'
        raised
        style={{
          backgroundColor: '#059805'
        }}
      >
        Guardar
      </Button>
    </div>
  )
}


export default Action