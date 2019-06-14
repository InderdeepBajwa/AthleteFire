
import React from 'react';
import { Route, Link } from 'react-router-dom';

import './../../styles/scss/pages/main/left-bar.scss'
import AddForm from '../components/forms/add-form';

class LeftBar extends React.Component {
    render() {
        return (
            <div id="leftBar">
                <h1>Left Bar</h1>
                <p>Hey, Name!</p>
                <p>Students</p>
                <p>Forms</p>
                <p><Link to="/add-form">Add Form</Link></p>
                <p><Link to="/manage-form">Manage Form</Link></p>
            </div>

        );
    }
}

export default LeftBar;
