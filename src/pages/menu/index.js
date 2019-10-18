import React, { Component } from 'react';
import Navigation from './navigation';

class Menu extends Component {
  constructor(props){
    super(props);
    this.isMovil();
    this.state = {
      toggle: false,
      movil: this.isMovil(),
      match: window.matchMedia('(max-width: 968px)')
    }
    this.state.match.addListener(this.mediaQuery);
  }
  mediaQuery = ()=>{
    if (this.state.match.matches) {
      // mobile screen
      this.setState({
        movil: true
      });
    } else {
      // hd screen
      this.setState({
        movil: false
      });
    }
  }
  isMovil = (e)=>{
    let dispositivo = navigator.userAgent.toLowerCase();
    if(dispositivo.search(/iphone|ipod|ipad|android/) > -1 ){
      return true;
    }else{
      return false;
    }
  }
  handleToggle = (e)=>{
      this.setState({
        toggle:!this.state.toggle
      },function(){
        if(this.state.toggle){
          if(this.state.movil){
            //document.body.style.overflow = 'hidden';
          }
        }
        else{
          if(this.state.movil){
            //document.body.style.overflow = 'auto';
          }
        }
      })
  }

  render() {
    return (
    		<div>
          <Navigation
            movil={ this.state.movil }
            toggle={ this.state.toggle }
            show={`${this.state.toggle?'showNav':'hiddenNav'}`}
            handleToggle={ this.handleToggle }
          />
        </div>
    )
  }
}

export default Menu;