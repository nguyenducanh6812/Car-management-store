import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import CarList from './CarList.jsx';
import CarEdit from './CarEdit.jsx';
import ClientSide from './ClientSide.jsx';
const NoMatch = () => <h2>No match to the route</h2>;

ReactDOM.render(
  (
    <Router history={hashHistory} >
      <Route path="/cars" component={CarList} />
      <Route path="/client" component={ClientSide} />
      <Route path="/cars/:id" component={CarEdit} />
      <Redirect from="/" to="/cars" />
      <Route path="*" component={NoMatch} />
    </Router>
  ),
  document.getElementById('main')
);
