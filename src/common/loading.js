import React from 'react'
import PropTypes from 'prop-types'
import './loading.css'

const Loading = (props) => (
  <div>
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
    <h3 className="spinner-title">{props.title}</h3>
  </div>
)

Loading.propTypes = {
  title: PropTypes.string
}
Loading.defaultProps = {
  title: 'Cargando...'
}

export default Loading