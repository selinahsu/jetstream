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

import './Result.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class Result extends React.Component{
  //static contextType = DataContext;
  state = {
    loading: true
  }
  componentDidMount() {
    setTimeout(() => {
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
              <img src={plane} height="75"/>
              <p>Your request is in flight . . . </p>
            </div>
          </div>
        </div>
      );
    
    return (
      <div className="result">  
        <NavbarComp />
        <Container className="mt-5">
          <Row className="mb-5">
            <Col xs={5}>
              <DataContextProvider>
                <MapCard />
              </DataContextProvider>
              <WorkCard />
            </Col>
            <Col xs={7}>
              <DataContextProvider>
                <StatsCard />
              </DataContextProvider>
              <OffsetCard />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Result;