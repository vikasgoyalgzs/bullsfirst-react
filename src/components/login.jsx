import React from 'react';
import reactMixin from 'react-mixin';
import reactFireMixIn from 'reactfire';
import serialize from 'form-serialize';
import fireBase from 'firebase';
import _ from 'lodash';

class Login extends React.Component {
    constructor () {
        super();
        this.state = {
            users: []
        };
    }

    componentWillMount () {
        this.firebaseRef = new Firebase("https://bullsfirst.firebaseio.com/users");
        this.bindAsArray(this.firebaseRef, "users");
    }

    onSubmit (evt) {
        evt.stopPropagation();
        var form = evt.target.parentNode;
        var values = serialize(form, { hash: true });
        if (_.findIndex(this.state.users, {username: values.username, password: values.password})> -1) {
            alert('login');
        }
    }

    render () {
        return (
            <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <input id="username" name="username" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" />
                </div>
                <button id="openaccount" onClick={this.onSubmit.bind(this)}>Login</button>
            </form>
        );
    }
}

reactMixin(Login.prototype, reactFireMixIn);
export default Login;