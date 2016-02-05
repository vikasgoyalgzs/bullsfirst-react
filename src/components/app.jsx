import React from 'react';
import Home from './home.jsx';

require('./../styles/sass/index.scss');

class App extends React.Component {
    constructor () {
        super();
        this.state = {
        };
    }

    render () {
        return (
            <Home />
        )
    }
}

export default App;