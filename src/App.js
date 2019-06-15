import React from 'react';
//import './App.css';
import {BrowserRouter as Router } from "react-router-dom";
import NavigationBar from './partials/navbar';

import { withAuthentication } from './session';

function App () {
  return (
    <Router>
      <NavigationBar />
    </Router>
  );
}

export default withAuthentication(App);
// export default App;
