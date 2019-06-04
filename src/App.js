import React from 'react';
//import './App.css';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavigationBar from './partials/navbar';

function App() {
  return (
    <Router>
      <NavigationBar />
    </Router>
  );
}

export default App;
