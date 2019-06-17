
import React from 'react';
import "../../styles/scss/pages/landing.scss";
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div id="landing-header">
                    <h2>Welcome to AthleteFire!</h2>
                    <p>UniversityName's own Athlete tracking application.</p>

                    {/* Button here */}
                    <div className="btn">
                        <div className='nine'>
                            <div className='elong'>
                                <div className='first'>
                                    <Link to="/login">Log In</Link>
                                </div>
                                <div className='second'>
                                    <Link to="/login" className="secondary">Nice!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="homepage-text align-center">
                    <h1>Welcome home Athletes!</h1>
                    <p>AthelteFire is a powerful application that enhances your organization's abilities to boost athletic skills without having to worry about keeping information accessible.</p>
                </div>
            </React.Fragment>
        );
    }
}

export default LandingPage;
