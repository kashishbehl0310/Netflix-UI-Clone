import React, {Component} from 'react';
import axios from "axios";
import { Redirect } from "react-router-dom"

export class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state= {
            email: '',
            password: '',
            secureInput: true,
            isButtonVisible: false,
            error: {},
            redirect: false
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.toggleShowPassword = this.toggleShowPassword.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }
    onChange(e){
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    handlePasswordChange(e){
        let password = e.target.value;
        if(!password.length >= 0){
            this.setState({
                password,
                isButtonVisible: true
            })
        }
        
    }
    
    onSubmit(e){
        e.preventDefault();
        const { email, password } = this.state;
        axios.post('http://localhost:3000/api/users/login', {email, password})
            .then((result) => {
                if(result.data.token){
                    localStorage.setItem('jwtToken', result.data.token);
                }
                this.setState({
                    redirect: true
                })
            })
            .catch((error) => {
                 console.log(error)
            })
    }
    toggleShowPassword(){
        this.setState({
            secureInput: !this.state.secureInput
        })
    }
    render(){
        const { redirect } = this.state;
        if(redirect){
            return <Redirect to="/home" />
        }
        return(
            <div className="login-body">
                <div>
                    <div className="login-content">
                        <h1>Sign In</h1>
                        <form onSubmit={this.onSubmit} >
                            <fieldset>
                                <input className="formControl" type="text" name="email" value={this.state.email} onChange={this.onChange} />
                                <label className="form-placeholder" for="email" >Email</label>
                            </fieldset>
                            <fieldset>
                                <input className="formControl" type={this.state.secureInput ? 'password': 'text'} name="password" value={this.state.password} onChange={this.handlePasswordChange} />
                                <label className="form-placeholder" for="password" >Password</label>
                                {
                                    this.state.isButtonVisible && <button onClick={this.toggleShowPassword} > {(this.state.secureInput) ? 'Show' : 'Hide' }</button>
                                }
                                
                            </fieldset>
                            <button className="signup-button" >Sign In</button>
                            <div className="signin-now">
                                New to Netflix? <a href="/signup">Sign up now</a>.
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;