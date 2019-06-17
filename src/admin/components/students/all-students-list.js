
import React from 'react';

import { withFirebase } from './../../../firebase';

import "./../../../styles/scss/pages/main/students/all-students-list.scss";


class AllStudentsList extends React.Component {   
    
    constructor(props) {
        super(props);
        
        this.state = {
            loading: false,
            users: [],
        };
    }

    componentDidMount() {
        // TODO: Loading screen

        this.unsubscribe = this.props.firebase
            .users()
            .onSnapshot(snapshot => {
                let users =[];
                
                snapshot.forEach(doc =>
                    users.push({ ...doc.data(), uid: doc.id}),
                );

                this.setState({
                    users,
                    loading: false,
                });
            });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }


    render() {

        const { users, loading } = this.state;

        return (
            <React.Fragment>
                <h1>A list of all students</h1>

                {loading && <div>Loading ... </div>}

                <ul>
                    {users.map(user => (
                        <li className="studentList" key={user.uid}>
                            <img className="userAvatar" src={user.profile_picture} />
                            <div className="userInformation">
                                <span>Name: <strong> {user.first_name + ' ' + user.last_name}</strong></span>
                                <span>Role: <strong> {user.role == 0 ? "Student" : "Coach"}</strong></span>
                            </div>
                        </li>
                    ))}
                </ul>
            </React.Fragment>            
        );
    }
}

export default withFirebase(AllStudentsList);
