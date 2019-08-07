import React, { Component } from "react";
import styled from 'styled-components';
import { Redirect } from "react-router-dom"
import axios from 'axios';
import bgsmall from '../../img/bg-mobile.jpg';
import Nav from '../HomepageComponent/Nav/Nav';

const Header = styled.header`
    background: linear-gradient(
                to right,
                rgba(0, 0, 0, 0.75), 
                rgba(0, 0, 0, 0.09)
                ),
                url(https://i.imgur.com/8vJeoTd.jpg);
                background-size: cover;
                display: block;
                min-height: 140vh;
                position: absolute;
                width: 100%;
                z-index: -1;
    @media (max-width: 1000px) {
      height: 90vh;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.75), 
        rgba(0, 0, 0, 0.09)
      ),
      url(${bgsmall});
      background-size: cover;
    }
`;

class Signup extends Component{
    constructor(props){
        super(props);
        this.state={
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {},
            validEmail: false,
            validPassword: false,
            passwordMatch: false,
            redirect: false
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }
    onChange(e){
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    onSubmit(e){
        e.preventDefault();
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { name, email, password, password2 } = this.state;
        if(!this.state.validEmail){
            if(emailCheckRegex.test(email)){
                this.setState({
                    validEmail: true
                })
                console.log("valid")
            } else {
                if(!emailCheckRegex.test(email)){
                    this.setState({validEmail: false})
                }
            }           
        }
        axios.post(' https://limitless-spire-75144.herokuapp.com/api/users/register', {name, email, password, password2})
            .then((result) => {
                this.setState({
                    redirect: true
                })
            })
            .catch((error) => {
                console.log(error.response.data.message)
            })
    }
    validateEmail(email){
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;        
        if(!this.state.validEmail){
            if(emailCheckRegex.test(email)){
                        
            }
        }
    }
    handleChange(e){
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;        
        this.setState({
            email: e.target.value
        })
        let email = e.target.value;
        if(!this.state.validEmail){
            if(emailCheckRegex.test(email)){
                this.setState({
                    validEmail: true
                })
            } else {
                if(!emailCheckRegex.test(email)){
                    this.setState({
                        validEmail: false
                    })
                }
            }
        }
    }
    handlePasswordChange(e){
        let password = e.target.value;
        this.setState({
            password
        })
        if(!this.state.validPassword){
            if(password.length > 4){
                this.setState({validPassword: true})
            } else if(password.length < 4){
                this.setState({validPassword: false})
            }
        }
    }
    // handlePasswordChange(e){
    //     console.log(e.target.value)
    // }
    // handleConfirmPassword(event){
    //     if(event.target.value !== this.state.password){
    //         console.log("Not matching")
    //     } else {
    //         consol.log("Matched")
    //     }
    // }
    render(){
        const {errors, validEmail, redirect} = this.state;
        if(redirect){
            return <Redirect to="/signin" />
        }
        return(
            <Header>
                <Nav signInRendered={this.props.signInRendered}></Nav>
                <div className="login-body">     
                    <div>
                        <div className="login-content">
                            <h1>Sign Up</h1>
                            <form onSubmit={this.onSubmit}>
                                {/* <div className="form-control" > */}
                                <fieldset>
                                    <input name="name" type="text" value={this.state.name} onChange={this.onChange}  />
                                    <label for="name">Name</label>
                                </fieldset>
                                {/* </div> */}
                                <fieldset>
                                    <input name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                                    <label for="email" >Email</label>
                                </fieldset>
                                <fieldset>
                                    <input name="password" type="password" value={this.state.password} onChange={this.handlePasswordChange}  />
                                    <label for="password" >Password</label>                                
                                </fieldset>
                                <fieldset>
                                    <input name="password2" type="password" value={this.state.password2} onChange={this.onChange} />
                                    <label for="password2" >Confirm Password</label>                                
                                </fieldset>
                                <button type="submit" className="signup-button" >Register</button>
                            </form>
                        </div>
                    </div>
                    <div className="signin-now">
                        Already a member? <a href="/signin">Sign In now</a>.
                    </div>  
                </div>
        </Header>
        )
    }
}

export default Signup;