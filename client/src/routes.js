import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './pages/App';
import Result from './pages/Result';

const createRoutes = () => (
  <Router>
    <Route exact path="/" component={App}/>
    <Route exact path="/result" component={Result}/>
  </Router>
);

export default createRoutes;