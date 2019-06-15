
import React from 'react';
import './../../styles/scss/partials/navbar.scss';
import { Route, Link } from 'react-router-dom';
import LandingPage from './../landing/index';
import SignInPage from './../../pages/log-in/index';
import AdminPanel from '../../admin';

class NavigationBar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div id="navbar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Log In</Link></li>
                        <li><Link to="">Become an Athlete</Link></li>
                        <li><Link to="">Contact a Coach</Link></li>
                        <li><Link to="/panel">Admin Panel</Link></li>
                    </ul>
                </div>

                <br />

                <Route exact path="/" component={LandingPage} />
                <Route path="/login" component={SignInPage} />
                <Route path="/panel" component={AdminPanel} />
            </React.Fragment>
        );
    }
}

export default NavigationBar;