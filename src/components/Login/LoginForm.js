import React, {Component} from 'react';

export class LoginForm extends Component{
    render(){
        return(
            <div className="login-body">
                <div>
                    <div className="login-content">
                        <h1>Sign In</h1>
                        <form>
                            <input type="text" name="email" placeholder="Email" />
                            <input type="password" name="password" placeholder="password" />
                            <button>Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;