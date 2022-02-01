import React, { Fragment } from 'react';
import { Router } from '@reach/router';
/** importing our pages */
import Home from './home';
import Teams from './teams';


export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <Home path="/" />
      <Teams path="/teams"/>
    </Router>
  );
}