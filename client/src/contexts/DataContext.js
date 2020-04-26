import React, {createContext} from 'react';

export const DataContext = createContext();

class DataContextProvider extends React.Component {
  state = {
    flightType: "one-way",
    destination: "",
    departure: "",
    passengers: 2,
    seat: ""
  }
  setPassengers = (val) => {
    this.setState({
      passengers: val
    });
  }
  setFlightType = (val) => {
    this.setState({
      flightType: val
    });
  }
  render () {
    return (
      <DataContext.Provider value={{
        ...this.state, 
        setPassengers: this.setPassengers,
        setFlightType: this.setFlightType
      }}>
        {this.props.children}
      </DataContext.Provider>
    )
  }
}

export default DataContextProvider;