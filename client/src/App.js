import React from 'react';
import NavbarComp from './components/navbar.js'
import FormCard from './components/form-card.js'
import Splash from './components/splash.js'

import DataContextProvider from './contexts/DataContext';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  formSubmit = () => {

  }

  render() {
    return (
      <div className="App">  
      <NavbarComp />
      <Container>
        <Row>
          <Col xs={1}></Col>
          <Col xs={5}>
            <DataContextProvider>
              <FormCard onSubmit={this.formSubmit}/>
            </DataContextProvider>
          </Col>
          <Col xs={5}>
            <Splash />
          </Col>
          <Col xs={1}></Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default App;
