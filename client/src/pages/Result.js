import React from 'react';
import NavbarComp from '../components/navbar.js'

import plane from '../assets/plane.png'
import house from '../assets/house.png';
import car from '../assets/car.png';
import map from '../assets/map.png';

import DataContextProvider from '../contexts/DataContext';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';

import './Result.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class Result extends React.Component{
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
      )
    return (
      <div className="result">  
      <NavbarComp />
      <Container className="mt-5">
        <Row>
          <Col xs={5}>
            <Card className="mb-4 p-5">
              <h5>Flying <b>Toronto, ON</b> to <b>Houston, TX</b></h5>
              <p>Distance: 1560 miles</p>
              <img src={map} className="mb-4" width="100%"/>
              <Button 
                href='/'
                className="w-25"
                variant="dark"
                size="sm">
                Edit
              </Button>
            </Card>
            <Card className="virtual-resources p-5">
              <h5>Travel often for work?</h5>
              <p>Consider advocating within your company for less business travel to cut down on emissions. 
                Find out more about virtual collaboration below.
              </p>
              <Row className="justify-content-between mx-1 mb-4">
                <a href="https://miro.com">
                  <img src="https://image4.owler.com/logo/miro-_owler_20191112_173043_original.png" 
                    alt="Miro" 
                    width="100"
                  />
                </a>
                <a href="https://zoom.us">
                  <img src="https://images.squarespace-cdn.com/content/v1/5a060e0da9db090b71280ce5/1584308998649-7TV1XHS9D7QNL6BC0KYC/ke17ZwdGBToddI8pDm48kLBf5316rxAPXhJ3Mun1IRZZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyyQBD6hxaWKvsWqs5gXDS03R0lcxz8d5Kd__eD_7yK6hS1sdWbM7GvrECzO3yFJBQ/zoom-logo-transparent-6-1.png" 
                    alt="Zoom" 
                    width="130"
                  />
                </a>
                <a href="https://www.webex.com">
                  <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/032020/webex-logo.png?XhhswG1JPrDjC2RI.DNLh3v8G3MzhZn_&itok=t87vu96e" 
                    alt="Cisco Webex" 
                    width="60"
                  />
                </a>
              </Row>
              <Button 
                href='/'
                className="w-50"
                variant="dark"
                size="sm">
                Learn More
              </Button>
            </Card>
          </Col>
          <Col xs={7}>
            <Card className="mb-4 p-5">
              <h4>Your trip generates</h4>
              <Row className="justify-content-between mt-2">
                <Col xs={6}>
                  <Card className="gen-cards px-3 py-3">
                    <h5>
                      <b>395 </b> 
                      tonnes of CO<sub>2</sub>
                    </h5>
                    <h6>which equals</h6>
                    <div className="my-4">
                      <img src={house} alt="Household Emissions" width="100"/>
                    </div>
                    <p>3.4 years of emissions from the average American household</p>
                  </Card>
                </Col>
                <Col xs={6}>
                  <Card className="gen px-3 py-3">
                    <h5>
                      <b>3,728 </b> 
                      barrels of oil
                    </h5>
                    <h6>which equals</h6>
                    <div className="my-4">
                      <img src={car} alt="Vehicle Emissions" width="100"/>
                    </div>
                    <p>17.4 trips across the continental US</p>
                  </Card>
                </Col>
              </Row>
            </Card>
            <Card className="p-5">
              <h4>Offset your emissions!</h4>
              <p>You can help offset your carbon emissions by donating to one of the following 
                sustainability-focused non-profits. Based on your flight data, donating 
                $23 
                would be enough to your CO<sub>2</sub> footprint. 
              </p>
              <Row className="justify-content-between mx-1">
              <a href="https://onetreeplanted.org/">
                <img src="https://globescan.com/wp-content/uploads/2019/07/OneTreePlanted-logo-square-green-200x200.png"
                  alt="One Tree Planted"
                  target="_blank"
                  height="95"
                />
              </a>
              <a href="https://treecanada.ca">
                <img src="https://treecanada.ca/wp-content/uploads/2017/11/TCLogos_Green-Eng-1025x475-green.png"
                  alt="Tree Canada"
                  target="_blank"
                  height="100"
                />
              </a>
              <a href="https://teamtrees.org/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Team_Trees_circle_logo.svg/1200px-Team_Trees_circle_logo.svg.png"
                  alt="#TeamTrees"
                  target="_blank"
                  height="100"
                />
              </a>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Result;