 import React from 'react';
 import serialize from 'form-serialize';
 import fireBase from 'firebase';

 class OpenAccount extends React.Component {
     constructor() {
         super();
         this.state = {
             users: []
         };
         this.firebaseRef = new fireBase('https://bullsfirst.firebaseio.com/users');
     }


     onSubmit (evt) {
         evt.stopPropagation();
         var form = evt.target.parentNode;
         var values = serialize(form, { hash: true });
         delete values.confirmpassword;
         this.firebaseRef.push(values);
         return false;
     }


     render () {
         return (
             <form>
                 <div>
                     <label htmlFor="firstname">First Name:</label>
                     <input id="firstname" name="firstname" />
                 </div>
                 <div>
                     <label htmlFor="lastname">Last Name</label>
                     <input id="lastname" name="lastname" />
                 </div>
                 <div>
                     <label htmlFor="username">Username</label>
                     <input id="username" name="username" />
                 </div>
                 <div>
                     <label htmlFor="password">Password</label>
                     <input id="password" name="password" />
                 </div>
                 <div>
                     <label htmlFor="confirmpassword">Confirm Password</label>
                     <input id="confirmpassword" name="confirmpassword" />
                 </div>
                 <button type="button" id="openaccount" onClick={this.onSubmit.bind(this)}>Open Account</button>
                 <button type="button" id="cancelopen">Cancel</button>
             </form>
         )
     }
 }

 export default OpenAccount;