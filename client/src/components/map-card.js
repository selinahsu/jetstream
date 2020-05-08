import React, { useContext } from 'react';

import map from '../assets/map.png';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';

import '../pages/Result.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { DataContext } from '../contexts/DataContext';

function MapCard(props) {
  const info = useContext(DataContext);
  return (
    <Card className="mb-4 p-5">
      <h5>Flying <b>{ info.departure }</b> to <b>{ info.destination }</b></h5>
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