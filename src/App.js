import React from 'react';
//import './App.css';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavigationBar from './partials/navbar';

import Firebase, { FirebaseContext } from './firebase';


function App() {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <Router>
        <NavigationBar />
      </Router>
    </FirebaseContext.Provider>
  );
}

export default App;
