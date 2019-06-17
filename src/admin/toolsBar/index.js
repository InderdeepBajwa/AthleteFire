
import React from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext, withAuthorization } from './../../session';

import './../../styles/scss/pages/main/toolBar.scss'

class ToolBar extends React.Component {
    render() {
        return (
            <div id="leftBar">
                <AuthUserContext.Consumer>
                    {authUser => (
                        <>
                            <img src={authUser.profile_picture} alt={`${authUser.first_name}'s image`} className="userImg"/>
                            <p>Hey, <strong>{authUser.first_name}</strong>!</p>
                        </>
                    )}
                </AuthUserContext.Consumer>
                <p>Students</p>
                <p><Link to="/panel/all-students">All Students</Link></p>
                <p><Link to="/panel/add-new-student">Add Student</Link></p>
                <p>Forms</p>
                <p><Link to="/panel/add-form">Add Form</Link></p>
                <p><Link to="/panel/manage-form">Manage Form</Link></p>
            </div>

        );
    }
}

export default ToolBar;
