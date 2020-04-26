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
    <form onSubmit={props.handleSubmit} action="/result">
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
        className="slider mb-3" 
        min="0" max="10" 
        value={info.passengers}
        onChange={(event) => {
          info.setPassengers(event.target.value)
          //console.log(passengers);
        }}
      /> 
      <span>{info.passengers}</span>
      <br />
      <label>Flying With:</label><br />
      <select id="seat" className="mb-3">
        <option value="" selected disabled>Select an option</option>
        <option value="economy">Delta Airlines</option>
        <option value="business">American Airlines</option>
        <option value="first-class">Southwest Airlines</option>
        <option value="first-class">United Airlines</option>
      </select> 
      <br />
      <label>Seat Class:</label><br />
      <select id="seat" className="mb-4">
        <option value="" selected disabled>Select an option</option>
        <option value="economy">Economy</option>
        <option value="business">Business</option>
        <option value="first-class">First Class</option>
      </select> 
      <br />
      <button>Calculate</button>
    </form>
  );
}

class FormCard extends React.Component {
  static contextType = DataContext;
  state = {

  }
  render() {
    /* Destructure the context */
    const { flightType, destination, departure, seat, setFlightType } = this.context;
    return (
      <Card className="mt-5 p-5">
        <form>
        <Row className="justify-content-between px-3 pb-3">
          <div>
            <input 
              type="radio" 
              checked={flightType==="one-way"} 
              onChange={(event) => {
                setFlightType(event.target.value)
              }}
              id="one-way" 
              name="flight-type" 
              value="one-way"/>
            <label>One Way</label>
          </div>
          <div>
            <input 
              type="radio" 
              checked={flightType==="round-trip"} 
              onChange={(event) => {
                setFlightType(event.target.value)
              }}
              id="round-trip"
              name="flight-type" 
              value="round-trip"/>
            <label>Round Trip</label>
          </div>
          <div>
            <input 
              type="radio" 
              checked={flightType==="multi-city"} 
              onChange={(event) => {
                setFlightType(event.target.value)
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
}

export default FormCard; 