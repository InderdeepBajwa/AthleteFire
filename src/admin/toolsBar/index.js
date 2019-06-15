
import React from 'react';
import { Link } from 'react-router-dom';

import './../../styles/scss/pages/main/toolBar.scss'

class ToolBar extends React.Component {
    render() {
        return (
            <div id="leftBar">
                <h1>Left Bar</h1>
                <p>Hey, Name!</p>
                <p>Students</p>
                <p>Forms</p>
                <p><Link to="/panel/add-form">Add Form</Link></p>
                <p><Link to="/panel/manage-form">Manage Form</Link></p>
            </div>

        );
    }
}

export default ToolBar;
