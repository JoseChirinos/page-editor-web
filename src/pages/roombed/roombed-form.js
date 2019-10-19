import React from 'react';
import PropTypes from 'prop-types';
import '../@style/container.css';
import '../@style/form.css';
/* Components */
import TextField, {HelperText, Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Remove from '../../common/remove';
import SearchPerson from '../../common/search-person';

const PositionForm = (props)=>{
  return (
    <div className="app-container">
      <div className="app-form">
        {
          props.editForm ?
          <span/>
          :
          <fieldset className="app-form--fieldset">
            <legend>
              Designar Persona
            </legend>
            <SearchPerson
              selected = { props.selected }
            />
          </fieldset>
        }

        <fieldset className="app-form--fieldset">
          <legend>
            Sobre la Persona
          </legend>

          <aside className="app-form--control">
            <TextField
              label='Profesión'
              helperText={<HelperText>Help Me!</HelperText>}
              onTrailingIconSelect={ () => props.changeState({profession: ''})}
              trailingIcon={<MaterialIcon role="button" icon="close "/>}
              className='app-form--input'
            ><Input
              required
              id="profession"
              value={props.profession}
              onChange={(e) => props.changeState({profession: e.currentTarget.value})} />
            </TextField>
          </aside>

          <aside className="app-form--control">  
            <TextField
              label='Especialidad'
              helperText={<HelperText>Help Me!</HelperText>}
              onTrailingIconSelect={() => props.changeState({specialty: ''})}
              trailingIcon={<MaterialIcon role="button" icon="close "/>}
              className='app-form--input'
            ><Input
              required
              id="specialty"
              value={props.specialty}
              onChange={(e) => props.changeState({specialty: e.currentTarget.value})} />
            </TextField>
          </aside>

        </fieldset>

        <fieldset className="app-form--fieldset">
          <legend>
            Asignación del Rol
          </legend>

          <aside className="app-form--control">  
            <TextField
              label='Cargo'
              helperText={<HelperText>Help Me!</HelperText>}
              onTrailingIconSelect={() => props.changeState({appointment: ''})}
              trailingIcon={<MaterialIcon role="button" icon="close "/>}
              className='app-form--input'
            ><Input
              required
              id="appointment"
              value={props.appointment}
              onChange={(e) => props.changeState({appointment: e.currentTarget.value})} />
            </TextField>
          </aside>

          <aside className="app-form--control">
            <TextField
              label='Dirección de Carrera'
              helperText={<HelperText>Help Me!</HelperText>}
              onTrailingIconSelect={() => props.changeState({career_direction: ''})}
              trailingIcon={<MaterialIcon role="button" icon="close "/>}
              className='app-form--input'
            ><Input
              required
              id="career_direction"
              value={props.career_direction}
              onChange={(e) => props.changeState({career_direction: e.currentTarget.value})} />
            </TextField>
          </aside>

        </fieldset>

        {
          props.editForm?
          <Remove />
          :
          <span/>
        }

      </div>
    </div>
  )
}

PositionForm.propTypes = {
  profession: PropTypes.string,
  specialty: PropTypes.string,
  appointment: PropTypes.string,
  career_direction: PropTypes.string,
  newForm: PropTypes.bool,
  passChange: PropTypes.bool,
  selected: PropTypes.func
}

PositionForm.defaultProps = {
  profession: '',
  specialty: '',
  appointment: '',
  career_direction: '',
  editForm: false,
  selected: ()=>{}
}

export default PositionForm;