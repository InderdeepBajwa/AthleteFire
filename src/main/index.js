
import React from 'react';

import LeftBar from './left-bar';
import Panel from './panel';

class Main extends React.Component {
    render () {
        return (
            <React.Fragment>
                <LeftBar />
                <Panel />
            </React.Fragment>
        );
    }
}

export default Main;
