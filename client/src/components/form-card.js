import React, { useState } from 'react';
import './form-card.scss';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

function UnavailableMssg(props) {
  if (props.flightType !== "multi-city") 
    return null;
  return (
    <p>
        Sorry, this feature is still under construction. Join our mailing list to stay updated with jetstream. 
    </p>
  );
}

function FormContent(props) {
  const [passengerCount, setPassengers] = useState(2);

  if (props.flightType === "multi-city") 
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
        value={passengerCount}
        onChange={(event) => {
          setPassengers(event.target.value);
          //console.log(passengerCount);
        }}
      /> 
      <span>{passengerCount}</span>
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

class FormCard extends React.Component {
  state = {
    flightType: "one-way",
    destination: "",
    departing: "",
    seat: ""
  }
  handleFlightChange = (event) => {
    this.setState(
      { flightType: event.target.value } 
    );
    // console.log(this.state.flightType);
  }
  handleSubmit = (event) => {
    this.setState(
      { username: event.target.value }
    )
  }
  render() {
    return (
      <Card className="mt-5 p-5">
        <form>
        <Row className="justify-content-between px-3 pb-3">
          <div>
            <input 
              type="radio" 
              checked={this.state.flightType==="one-way"} 
              onChange={this.handleFlightChange}
              id="one-way" 
              name="flight-type" 
              value="one-way"/>
            <label>One Way</label>
          </div>
          <div>
            <input 
              type="radio" 
              checked={this.state.flightType==="round-trip"} 
              onChange={this.handleFlightChange} 
              id="round-trip"
              name="flight-type" 
              value="round-trip"/>
            <label>Round Trip</label>
          </div>
          <div>
            <input 
              type="radio" 
              checked={this.state.flightType==="multi-city"} 
              onChange={this.handleFlightChange} 
              id="multi-city" name="flight-type" 
              value="multi-city"/>
            <label>Multi-City</label>
          </div>
        </Row>
        </form>
        <UnavailableMssg flightType={this.state.flightType}/>
        <FormContent flightType={this.state.flightType} />
      </Card>
    );
  }
}

export default FormCard; 