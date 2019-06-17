
import React from "react";
import { Route } from 'react-router-dom';

import AddForm from "./components/forms/addForms";
import ToolBar from "./toolsBar";
import ManageForm from "./components/forms/manage-forms";

import "./../styles/scss/pages/main/admin.scss";
import AllStudentsList from "./components/students/all-students-list";
import AddNewStudent from "./components/students/add-student";

const AdminPanel = ({ match }) => (
    <div className="separator">
        <ToolBar />
        
        <div id="Panel">
            
            {/* Routes defined for Admin panel */}

            <Route path={`${match.url}/add-form`} component={AddForm} />
            <Route path={`${match.url}/manage-form`} component={ManageForm} />
            <Route path={`${match.url}/all-students`} component={AllStudentsList} />
            <Route path={`${match.url}/add-new-student`} component={AddNewStudent} />
        </div>
    </div>

);

export default AdminPanel;
