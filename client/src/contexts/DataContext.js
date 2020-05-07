import React, {createContext} from 'react';

export const DataContext = createContext();

class DataContextProvider extends React.Component {
  state = {
    flightType: "one-way",
    destination: "NA",
    departure: "NAANA",
    passengers: 2,
    airline: "",
    seat: ""
  }
  setDestination = (val) => {
    this.setState({
      destination: val
    });
  }
  setDeparture = (val) => {
    this.setState({
      departure: val
    });
  }
  setFlightType = (val) => {
    this.setState({
      flightType: val
    });
  }
  setPassengers = (val) => {
    this.setState({
      passengers: val
    });
  }
  setAirline = (val) => {
    this.setState({
      airline: val
    });
  }
  setSeat = (val) => {
    this.setState({
      seat: val
    });
  }
  render
   () {
    return (
      <DataContext.Provider value={{
        ...this.state, 
        setDestination: this.setDestination,
        setDeparture: this.setDeparture,
        setFlightType: this.setFlightType,
        setPassengers: this.setPassengers,
        setAirline: this.setAirline,
        setSeat: this.setSeat
      }}>
        {this.props.children}
      </DataContext.Provider>
    )
  }
}

export default DataContextProvider;