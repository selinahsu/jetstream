import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import logo from '../assets/logo.png';

class NavbarComp extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Col xs={{offset: 1}}>
          <a href='/'>
            <img src={logo} height="30" alt="Jetstream Logo"/>
          </a>
        </Col>
      </Navbar>
    );
  }
}

export default NavbarComp;