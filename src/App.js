import React from 'react';
//import './App.css';
import {BrowserRouter as Router } from "react-router-dom";
import NavigationBar from './partials/navbar';

import { withAuthentication } from './session';
import LeftBar from './main/left-bar';
import Panel from './main/panel';

function App () {
  return (
    <Router>
      <NavigationBar />
    </Router>
  );
}

export default withAuthentication(App);
// export default App;
