
import React from "react";
import { Route } from 'react-router-dom';

import AddForm from "./components/forms/addForms";
import ToolBar from "./toolsBar";
import ManageForm from "./components/forms/manage-forms";

import "./../styles/scss/pages/main/admin.scss";

const AdminPanel = ({ match }) => (
    <div className="separator">
        <ToolBar />
        
        <div id="Panel">
            <Route path={`${match.url}/add-form`} component={AddForm} />
            <Route path={`${match.url}/manage-form`} component={ManageForm} />
        </div>
    </div>

);

export default AdminPanel;
