import React from 'react';
import PropTypes from 'prop-types';
import '../@style/container.css';
import '../@style/form.css';
/* Components */
import TextField, {HelperText, Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Remove from '../../common/remove';
import NurseRead from './nurse-read';

const NurseForm = (props)=>{
  return (
    <div className="graduate-container">
      <div className="graduate-form">
        <fieldset className="graduate-form--fieldset">
          <legend>
            Datos Básicos
          </legend>

          <aside className="graduate-form--control">
            <TextField
              label='Nombre'
              helperText={<HelperText>Help Me!</HelperText>}
              onTrailingIconSelect={ () => props.changeState({first_name: ''})}
              trailingIcon={<MaterialIcon role="button" icon="close"/>}
              className='graduate-form--input'
            ><Input
              required
              id="first_name"
              value={props.first_name}
              onChange={(e) => props.changeState({first_name: e.currentTarget.value})} />
            </TextField>
          </aside>

          <aside className="graduate-form--control">  
            <TextField
              label='Apellido'
              helperText={<HelperText>Help Me!</HelperText>}
              onTrailingIconSelect={() => props.changeState({last_name: ''})}
              trailingIcon={<MaterialIcon role="button" icon="close "/>}
              className='graduate-form--input'
            ><Input
              required
              id="last_name"
              value={props.last_name}
              onChange={(e) => props.changeState({last_name: e.currentTarget.value})} />
            </TextField>
          </aside>

          <div className="graduate-separate"/>

          <aside className="graduate-form--control">
            <TextField
              label='Carnet de Identidad'
              helperText={<HelperText>Help Me!</HelperText>}
              onTrailingIconSelect={() => props.changeState({ci: ''})}
              trailingIcon={<MaterialIcon role="button" icon="close "/>}
              className='graduate-form--input'
            ><Input
              required
              id="ci"
              value={props.ci}
              type="number"
              onChange={(e) => props.changeState({ci: e.currentTarget.value})} />
            </TextField>
          </aside>
        </fieldset>

        <fieldset className="graduate-form--fieldset">
          <legend>
            Contactos
          </legend>

          <aside className="graduate-form--control">  
            <TextField
              label='Número de Celular'
              helperText={<HelperText>Help Me!</HelperText>}
              onTrailingIconSelect={() => props.changeState({cellphone: ''})}
              trailingIcon={<MaterialIcon role="button" icon="close "/>}
              className='graduate-form--input'
            ><Input
              required
              id="cellphone"
              value={props.cellphone}
              onChange={(e) => props.changeState({cellphone: e.currentTarget.value})} />
            </TextField>
          </aside>

        </fieldset>

        {
          props.editForm?
          <Remove
            text="(*) Si usted esta seguro que quiere deshabilitar al usuario, es bajo su responsabilidad."
            label="DESHABILITAR"
            handleEvent = { props.disabledAccount }

          />
          :
          <NurseRead
            rfid = { props.rfid }
            { ...props.readInfo }
            changeState = { props.changeState }
            startRead = { props.startRead }
            cancelRead = { props.cancelRead }
          />
        }

      </div>
    </div>
  )
}

NurseForm.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  ci: PropTypes.string,
  cellphone: PropTypes.string,
  rfid: PropTypes.string,
  editForm: PropTypes.bool,
  changeState: PropTypes.func,
  disabledAccount: PropTypes.func
}

NurseForm.defaultProps = {
  first_name: '',
  last_name: '',
  ci: '',
  cellphone: '',
  rfid: '',
  editForm: false,
  changeState: ()=>{},
  disabledAccount: ()=>{}
}

export default NurseForm;