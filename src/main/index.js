
import React from 'react';

import {BrowserRouter as Router } from "react-router-dom";

import LeftBar from './left-bar';
import Panel from './panel';

import './../styles/scss/pages/main/main.scss'

class Main extends React.Component {
    render () {
        return (
            <div className="separator">
                <Router>
                    <LeftBar />
                    <Panel />
                </Router>    
            </div>
        );
    }
}

export default Main;
