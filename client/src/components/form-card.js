import React, { useContext } from 'react';
import './form-card.scss';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

import { DataContext } from '../contexts/DataContext';

function UnavailableMssg(props) {
  const info = useContext(DataContext);
  if (info.flightType !== "multi-city") 
    return null;
  return (
    <p>
        Sorry, this feature is still under construction. Join our mailing list to stay updated with jetstream. 
    </p>
  );
}

function FormContent(props) {
  const info = useContext(DataContext);
  //const { setPassengers } = this.context;
  if (info.flightType === "multi-city") 
    return null;
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="amt-input">
        <label>Destination</label><br />
        <input
          type="text"
          placeholder="Austin"
          value={props.username}
          onChange={props.handleChange}
          required
        />
      </div>
      <br />
      <div className="amt-input">
        <label>Departing From</label><br />
        <input
          type="text"
          placeholder="London"
          value={props.username}
          onChange={props.handleChange}
          required
        />
      </div>
      <br />
      <label>Number of Passengers:</label><br />
      <input 
        type="range" 
        className="slider" 
        min="0" max="10" 
        value={info.passengers}
        onChange={(event) => {
          info.setPassengers(event.target.value)
          //console.log(passengers);
        }}
      /> 
      <span>{info.passengers}</span>
      <br />
      <label>Seat Class:</label><br />
      <select id="seat">
        <option value="economy">Economy</option>
        <option value="business">Business</option>
        <option value="first-class">First Class</option>
      </select> 
      <br />
      <button className="mt-4">Calculate</button>
    </form>
  );
}

function FormCard(props) {
  const info = useContext(DataContext);
  return (
    <Card className="mt-5 p-5">
      <form>
      <Row className="justify-content-between px-3 pb-3">
        <div>
          <input 
            type="radio" 
            checked={info.flightType==="one-way"} 
            onChange={(event) => {
              info.setFlightType(event.target.value)
            }}
            id="one-way" 
            name="flight-type" 
            value="one-way"/>
          <label>One Way</label>
        </div>
        <div>
          <input 
            type="radio" 
            checked={info.flightType==="round-trip"} 
            onChange={(event) => {
              info.setFlightType(event.target.value)
            }}
            id="round-trip"
            name="flight-type" 
            value="round-trip"/>
          <label>Round Trip</label>
        </div>
        <div>
          <input 
            type="radio" 
            checked={info.flightType==="multi-city"} 
            onChange={(event) => {
              info.setFlightType(event.target.value)
            }}
            id="multi-city" name="flight-type" 
            value="multi-city"/>
          <label>Multi-City</label>
        </div>
      </Row>
      </form>
      <UnavailableMssg/>
      <FormContent/>
    </Card>
  );
}

export default FormCard; 