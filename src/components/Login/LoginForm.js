import React, {Component} from 'react';
import axios from "axios";

export class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state= {
            email: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e){
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    onSubmit(e){
        e.preventDefault();
        const { email, password } = this.state;
        axios.post('http://localhost:3000/api/users/login', {email, password})
            .then((result) => {
                localStorage.setItem('jwtToken', result.data.token);
                console.log("logged in successfully")
            })
            .catch((error) => {
                 console.log(error)
            })
    }
    render(){
        return(
            <div className="login-body">
                <div>
                    <div className="login-content">
                        <h1>Sign In</h1>
                        <form onSubmit={this.onSubmit} >
                            <fieldset>
                                <input type="text" name="email" value={this.state.email} onChange={this.onChange} />
                                <label for="email" >Email</label>
                            </fieldset>
                            <fieldset>
                                <input type="password" name="password" value={this.state.password} onChange={this.onChange} />
                                <label for="password" >Password</label>
                            </fieldset>
                            <button className="signup-button" >Sign In</button>
                            <div className="signin-now">
                                New to Netflix? <a href="/signin">Sign up now</a>.
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;