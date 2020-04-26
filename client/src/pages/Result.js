import React from 'react';
import NavbarComp from '../components/navbar.js'

import DataContextProvider from '../contexts/DataContext';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Result.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class Result extends React.Component{
  render() {
    return (
      <div className="App">  
      <NavbarComp />
      <Container>
        <Row>
          <Col xs={1}></Col>
          <Col xs={5}>
            <DataContextProvider>
              
            </DataContextProvider>
          </Col>
          <Col xs={5}>
          </Col>
          <Col xs={1}></Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Result;