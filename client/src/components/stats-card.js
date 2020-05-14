import React from 'react';

import house from '../assets/house.png';
import car from '../assets/car.png';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import '../pages/Result.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function StatsCard(props) {
  const emissions =  Math.round(props.emissions);
  const emissionsPercent = Math.round((props.emissions/6803.89)*100);
  const fuel = Math.round(props.fuel);
  const carDistanceTravelled = Math.round(props.fuel*18.31);

  return (
    <Card className="mb-4 p-5">
      <h4><b>Your Carbon Footprint</b></h4>
      <Row className="justify-content-between mt-2">
        <Col xs={6}>
          <Card className="gen-cards px-3 py-3">
            <h5>
              <b>{ emissions } </b> 
              kg of CO<sub>2</sub>
            </h5>
            <h6>which equals</h6>
            <div className="my-4">
              <img src={house} alt="Household Emissions" width="100"/>
            </div>
            <p><b>{ emissionsPercent }%</b> of annual emissions from the average US household</p>
          </Card>
        </Col>
        <Col xs={6}>
          <Card className="gen px-3 py-3">
            <h5>
              <b>{ fuel } </b> 
              kg of fuel
            </h5>
            <h6>which equals</h6>
            <div className="my-4">
              <img src={car} alt="Vehicle Emissions" width="100"/>
            </div>
            <p><b>{ carDistanceTravelled } km</b> driven in an automobile</p>
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

export default StatsCard;