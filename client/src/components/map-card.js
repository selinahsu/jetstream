import React, { useContext } from 'react';

import map from '../assets/map.png';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';

import '../pages/Result.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function MapCard(props) {
  return (
    <Card className="mb-4 p-5">
      <h5>Flying <b>{ props.departure }</b> to <b> {props.destination} </b></h5>
      <p>Distance: 1302 miles</p>
      <img src={map} alt="Placeholder Map" className="mb-4" width="100%"/>
      <Button 
        href='/'
        className="w-25"
        variant="dark"
        size="sm">
        Edit
      </Button>
    </Card>
  );
}

export default MapCard;