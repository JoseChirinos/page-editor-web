import React from 'react';
import PropTypes from 'prop-types';

/* Components */
import {
  NavLink
} from 'react-router-dom';
import TextField, {HelperText, Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Button from '@material/react-button';

const NurseRead = (props)=>{
  return(
    <fieldset className="graduate-form--fieldset">
      <legend>
        Tarjeta RFID
      </legend>

      <aside className="graduate-form--control">
      <span
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: 'rgb(234, 119, 129)',
            display: 'block',
            paddingBottom: 15

          }}
        >
          {
            props.message !== ""?
            <div>
              { `${props.message} ` }
              <NavLink to={ props.linkRef }>
                Ver Usuario
              </NavLink>
            </div>
            :
            ``
          }
        </span>
        <TextField
          label='Código RFID'
          helperText={
            <HelperText 
              persistent={true}
              className={`${props.load? 'graduate-label--load':''}`}
              >
                {
                  props.load ?
                  `Esperando lectura ${props.seconds} seg`
                  :
                  '(*)Presione LEER RFID y coloque su tarjeta en el lector'
                }
            </HelperText>
          }
          onTrailingIconSelect={() => props.changeState({rfid: ''})}
          trailingIcon={<MaterialIcon role="button" icon="close "/>}
          className='graduate-form--input'
        ><Input
          required
          id="rfid"
          onKeyDown = {(e)=>{e.preventDefault()}}
          value={props.rfid}
          onChange={(e) => props.changeState({rfid: e.currentTarget.value})} />
        </TextField>
        <Button
          raised
          onClick = { props.load? props.cancelRead:props.startRead }
          type="button"
          icon={<MaterialIcon icon="credit_card"></MaterialIcon>}
          className={ `graduate-form--input ${props.load ? 'graduate-btn--cancel':'graduate-btn--read'}` }
        >
          {
            props.load?
            'CANCELAR'
            :
            'LEER RFID'
          }
        </Button>
      </aside>

    </fieldset>
  )
}

NurseRead.propTypes = {
  message: PropTypes.string,
  linkRef: PropTypes.string,
  seconds: PropTypes.number,
  load: PropTypes.bool,
  rfid: PropTypes.string,
  changeState: PropTypes.func,
  startRead: PropTypes.func,
  cancelRead: PropTypes.func
}

NurseRead.defaultProps = {
  message: '',
  linkRef: '',
  seconds: 10,
  load: false,
  rfid: '',
  changeState: ()=>{},
  startRead: ()=>{},
  cancelRead: ()=>{}
}

export default NurseRead;