import React, { Component } from 'react';
import './home.css';

/* Components*/
import HomeHeader from './home-header';
import Turn from './turn';
/* Data */
import EmergencyHttp from '../@data/emergency-http';

class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      fullscreen: false,
      request: true
    }
  }
  componentDidMount() {
    EmergencyHttp.activeRead();
    this.initRealTime();
    this.interval = setInterval(() => this.initRealTime(), 2000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
    EmergencyHttp.cancelRead();
    this.setState({
      request: false
    });
  }
  initRealTime = () => {
    let self = this;
    if (this.state.request) {
      EmergencyHttp.emergencyNow(
        (data) => {
          if (data.result) {
            self.updateData(data.result);
          } else {
            self.updateData([]);
          }
        },
        (error) => {
          console.log(error);
        });
    }
  }
  updateData = (data) => {
    this.setState({
      data
    })
  }

  showFull = () => {
    if (document.fullscreenEnabled) {
      if (this.state.fullscreen) {
        if (window.document.fullscreenElement != null) {
          window.document.exitFullscreen();
        }
        this.setState({
          fullscreen: false
        })
      } else {
        window.document.body.requestFullscreen();
        this.setState({
          fullscreen: true
        })
      }
    } else {
      alert('su dispositivo no soporta pantalla completa')
    }
  }
  render() {
    return (
      <div className={`home-container ${this.state.fullscreen ? 'home-full-screen' : ''}`}>
        <HomeHeader />
        <Turn
          showFull={this.showFull}
          fullscreen={this.state.fullscreen}
          data={this.state.data}
        />
        {/* <HomeHeader />
        {
          this.state.rooms.map( (room)=>(
            <div key={ `room-${ room.id_room }` }>
              <h3>
                { room.room_label }
              </h3>

              {
                room.beds.map( (bed, index)=>(
                  <div key={ `bed-${ bed.id_bed + index }` }>
                    { bed.bed_label }
                  </div>
                ))
              }
            </div>
          ))
        } */}

      </div>
    )
  }
}

export default Home;