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
                <section id="home-page" className="intro-page clearfix">
                    <header>
                        <hgroup>
                            <h1 className="ir logo">Bullsfirst</h1>
                            <h2>Calling All Bull Markets</h2>
                        </hgroup>
                    </header>
                    <section className="login-section">
                        <Login />
                    </section>
                    <section className="intro-section">
                        <hgroup>
                            <h1>More Results</h1>

                            <h2>with Bullsfirst at the helm of your portfolio.</h2>
                        </hgroup>
                        <p className="features">Every account comes with:</p>

                        <ul className="features">
                            <li>0-second execution</li>
                            <li>Portfolio insurance</li>
                            <li>1 popsicle</li>
                        </ul>

                        <p>We love to trade, and we hope you do too!</p>

                        <p>
                            Now you can express that love with the latest trading platform
                            from Bullsfirst. We guarantee a 0-second trade execution,
                            and will give you a free popsicle if your trade doesn't go
                            through in this time period.
                        </p>

                        <p className="side-note">
                            On a side-note, we just bought a big freezer and 10,000 popsicles.
                            Thankfully, we've hedged all popsicle expenses for the next two
                            years! (Commodity experts say popsicles are on the rise).
                        </p>

                        <p className="open-account">
                            <a className="open-account-link" href="#/openaccount">Open an Account</a>
                        </p>
                    </section>
                    <footer>This is a demo application. All data displayed is fictitious.
                        Copyright © 2010-2013 <a href="http://archfirst.org">Archfirst.</a>
                    </footer>
                </section>
            </section>
        )
    }
}

export default Home;