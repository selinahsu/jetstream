import React from 'react';

import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';

import '../pages/Result.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function WorkCard(props) {
  return (
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
  );
}

export default WorkCard;