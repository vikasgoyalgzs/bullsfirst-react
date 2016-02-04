import React from 'react';
import OpenAccount from './open-account.jsx';
import Login from './login.jsx';


class Home extends React.Component {
    constructor () {
        super();
        this.state = {

        };
    }

    render () {
        return (
            <section>
                <Login />
                <OpenAccount style="display:none;" />
            </section>
        )
    }
}

export default Home;