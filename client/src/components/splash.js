import React from 'react';
import './splash.scss';
import axios from 'axios'; 

import illustration from '../assets/illustration.png';

class Splash extends React.Component {
  state = {
    info: "",
  }
  componentDidMount() {
    axios.get('/api/appletest')
      .then(res => {
        this.setState({info: res.data});
        console.log(this.state.info);
      })
  }
  render() {
    return (
      <div className="mt-5 splash">
        <h2>Calculate the CO<sub>2</sub> of your next flight</h2> 
        <p>Offset the emissions of your trip with Jetstream</p>
        <p>{this.state.info.fruit}</p>
        <img src={illustration} height="400" alt="Flight Illustration"/>
      </div>
    );
  }
}

export default Splash; 