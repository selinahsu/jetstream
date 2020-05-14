import React from 'react';
import NavbarComp from '../components/navbar.js'
import MapCard from '../components/map-card.js'
import WorkCard from '../components/work-card.js'
import StatsCard from '../components/stats-card.js'
import OffsetCard from '../components/offset-card.js'

import plane from '../assets/plane.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DataContextProvider from '../contexts/DataContext';

import axios from 'axios';

import './Result.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router';

class Result extends React.Component{
  //static contextType = DataContext;
  state = {
    loading: true,
    distance: '',
    emissions: '',
    fuel: ''
  }
  componentDidMount() {
    axios.post('/api/distance', {
      params: {
        destination: this.props.location.state.destination,
        departure: this.props.location.state.departure,
        passengers: this.props.location.state.passengers,
        flightType: this.props.location.state.flightType
      }
    }).then(res => {
      this.setState({
        distance: res.data.distance,
        emissions: res.data.emissions,
        fuel: res.data.fuel
      });
      console.log(`distance: ${this.state.distance}`);
      console.log(`emissions: ${this.state.emissions}`);
      console.log(`fuel: ${this.state.fuel}`);
    });

    setTimeout(() => {
      //Checking if the location data is avail with this.props.location?
      // console.log(this.props.location.state.destination);
      // console.log(this.props.location.state.departure);
      this.setState({
        loading: false
      });
    }, 3000)
  }
  render() {
    if (this.state.loading)
      return (
        <div className="transition-screen"> 
          <NavbarComp />
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <div style={{textAlign: 'center'}}>
              <img src={plane} alt="Plane Icon" height="75"/>
              <p>Your request is in flight . . . </p>
            </div>
          </div>
        </div>
      );

    const location = this.props.location;
    return (
      <div className="result">  
        <NavbarComp />
        <Container className="mt-5">
          <Row className="mb-5">
            <Col xs={5}>
              <DataContextProvider>
                <MapCard destination={location.state.destination} departure={location.state.departure} distance={this.state.distance}/>
              </DataContextProvider>
              <WorkCard />
            </Col>
            <Col xs={7}>
              <DataContextProvider>
                <StatsCard emissions={this.state.emissions} fuel={this.state.fuel}/>
              </DataContextProvider>
              <OffsetCard />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(Result);