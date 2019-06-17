
import React from 'react';

import { withRouter } from 'react-router-dom';

import { withFirebase } from '../../../firebase';

// Styles
import './../../../styles/scss/pages/main/students/add-student.scss';

const AddStudentPage = () => (
    <div>
        <h1>Add New Student</h1>
        <AddNewStudentPage />
    </div>
)

const INITIAL_STATE = {
    first_name: '',
    last_name: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    profile_picture: "",
    role: 0,
    error: null,
}

class AddNewStudentBase extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE};
    }

    onSubmit = event => {
        const { first_name, last_name, email, passwordOne, profile_picture, role } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
                .then(authUser => {
                    // Create the user in Firestore
                    return this.props.firebase.user(authUser.user.uid).set(
                        {
                            email,
                            first_name,
                            last_name,
                            profile_picture,
                            role,
                        },
                        { merge: true},
                    );
                })
                .catch(error => {
                    this.setState({error});
                })

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name] : event.target.value });
    };

    onChangeCheckbox = event => {
        this.setState({ [event.target.name]: event.target.checked });
    };

    render() {
        const {
            first_name,
            last_name,
            email,
            passwordOne,
            passwordTwo,
            profile_picture,
            error
        } = this.state;

        const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '' || first_name === '' || last_name === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input name="first_name" value={first_name} onChange={this.onChange} type="text" placeholder="First Name" />
                <input name="last_name" value={last_name} onChange={this.onChange} type="text" placeholder="Last Name" />
                <input name="email" value={email} onChange={this.onChange} type="email" placeholder="Email" />
                <input name="passwordOne" value={passwordOne} onChange={this.onChange} type="password" placeholder="Password" />
                <input name="passwordTwo" value={passwordTwo} onChange={this.onChange} type="password" placeholder="Confirm Password" />
                <input name="profile_picture" value={profile_picture} onChange={this.onChange} type="text" placeholder="Profile Picture URL" />

                <button disabled={isInvalid} type="submit"> Add Student</button>

                {error && <p className="error-code">{error.message}</p>}
            </form>
        );
    }
}

const AddNewStudentPage = withRouter(withFirebase(AddNewStudentBase));

export default AddStudentPage;
