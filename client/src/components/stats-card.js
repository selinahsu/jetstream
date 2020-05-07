import React, { useContext } from 'react';

import house from '../assets/house.png';
import car from '../assets/car.png';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import '../pages/Result.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { DataContext } from '../contexts/DataContext';

function StatsCard(props) {
  const info = useContext(DataContext);
  return (
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
  );
}

export default StatsCard;