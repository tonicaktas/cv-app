// Libs
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Components
import App from './components/App';
import Home from './components/Home';
import Larare from './components/Larare';
import Print from './components/Print';


import Edit from './components/edit';





// Routes
const routes = (
  <Router history={browserHistory}>
    <Route component={App}> //hämtar info om vilken url vi ä på från App.js
      <Route path="/" component={Home} /> // hämtar component beroende vilken url vi ä på
      <Route path="Larare" component={Larare} title="Information som ä i databasen"/>
      <Route path="edit" component={Edit} />
      <Route path="print" component={Print} />



    </Route>


  </Router>
);

export default routes;
