import React, { useContext, useState } from 'react';

import './form-card.scss';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

import { DataContext } from '../contexts/DataContext';

import history from '../history';

function UnavailableMssg() {
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

  const [destination, setDestination] = useState('');
  const [departure, setDeparture] = useState('');
  const [passengers, setPassengers] = useState(2);
  const [airline, setAirline] = useState('');
  const [seat, setSeat] = useState('');

  const capitalize = (str) => {
    if (!str)
      return str;
    if (str.length == 1)
      return str.toUpperCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push({
      pathname: '/result',
      state: {
        destination: destination,
        departure: departure,
        passengers: passengers,
        flightType: info.flightType
      }
    });
  };

  if (info.flightType === "multi-city") 
    return null;
  return (
    <form onSubmit={handleSubmit}>
      <div className="amt-input">
        <label>Destination</label><br />
        <input
          type="text"
          placeholder="e.g. Austin"
          value={destination}
          onChange={(event) => {
            setDestination(capitalize(event.target.value));
            console.log(destination);
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
          value={departure}
          onChange={(event) => {
            setDeparture(capitalize(event.target.value));
            console.log(departure);
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
        value={passengers}
        onChange={(event) => {
          setPassengers(event.target.value)
        }}
      /> 
      <span className="ml-3">{info.passengers}</span>
      <br />

      <label>Airline:</label><br />
      <select id="seat" className="mb-3" defaultValue={'default'}
        onChange={(event) => {
          setAirline(event.target.value)
        }}
      >
        <option value="default" disabled>Select an option</option>
        <option value="economy">Delta Airlines</option>
        <option value="business">American Airlines</option>
        <option value="first-class">Southwest Airlines</option>
        <option value="first-class">United Airlines</option>
      </select> 
      <br />

      <label>Seat Class:</label><br />
      <select id="seat" className="mb-4" defaultValue={'default'}
        onChange={(event) => {
          setSeat(event.target.value)
        }}
      >
        <option value="default" disabled>Select an option</option>
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
    redirect: false
  }
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
                setFlightType(event.target.value);
                this.flightType = event.target.value;
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
        <FormContent/>
      </Card>
    );
  }
}

export default FormCard; 