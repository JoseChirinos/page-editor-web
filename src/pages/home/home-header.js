import React from 'react';
import './home-header.css';

const HomeHeader = (props)=>{
  return(
    <header className="header-container">
      <figure className="header-image">
        <img src="/assets/images/cns-light.png" className="" alt="Caja Nacional de Salud - Logo"/>
      </figure>
      
      <h1 className="header-title">
        Emergencias
        <small>Atención inmediata</small>
      </h1>
    </header>
  )
}

export default HomeHeader;