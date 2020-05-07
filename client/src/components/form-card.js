import React, { useContext } from 'react';
import './form-card.scss';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

import axios from 'axios';

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

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  if (info.flightType === "multi-city") 
    return null;
  return (
    <form onSubmit={props.handleSubmit} action="/result">
      <div className="amt-input">
        <label>Destination</label><br />
        <input
          type="text"
          placeholder="e.g. Austin"
          value={info.destination}
          onChange={(event) => {
            info.setDestination(event.target.value)
            console.log(info.destination);
          }}
          required
        />
      </div>
      <br />
      <div className="amt-input">
        <label>Departing From</label><br />
        <input
          type="text"
          placeholder="e.g. London"
          value={info.departure}
          onChange={(event) => {
            info.setDeparture(event.target.value)
            console.log(info.departure);
          }}
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
          //console.log(info.passengers);
        }}
      /> 
      <span className="ml-3">{info.passengers}</span>
      <br />

      <label>Airline:</label><br />
      <select id="seat" className="mb-3"
        onChange={(event) => {
          info.setAirline(event.target.value)
          //console.log(info.airline);
        }}
      >
        <option value="" selected disabled>Select an option</option>
        <option value="economy">Delta Airlines</option>
        <option value="business">American Airlines</option>
        <option value="first-class">Southwest Airlines</option>
        <option value="first-class">United Airlines</option>
      </select> 
      <br />

      <label>Seat Class:</label><br />
      <select id="seat" className="mb-4"
        onChange={(event) => {
          info.setSeat(event.target.value)
          //console.log(info.seat);
        }}
      >
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
  // handleSubmit = () => {
  //   const info = this.context;
  //   axios.post('/api/flight', {
  //     params: {
  //       destination: info.destination,
  //       departure: info.departure
  //     }
  //   })
  //   .then((response) => {
  //     console.log(response);
  //     console.log(`here is the destination: ${this.context.setDestination}`);
  //   }, (error) => {
  //     console.log(error);
  //   });
  // }
  render() {
    /* Destructure the context */
    const { flightType, setFlightType } = this.context;
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
            <label className="pl-1">One Way</label>
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
            <label className="pl-1">Round Trip</label>
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
            <label className="pl-1">Multi-City</label>
          </div>
        </Row>
        </form>
        <UnavailableMssg/>
        <FormContent />
      </Card>
    );
  }
}

export default FormCard; 