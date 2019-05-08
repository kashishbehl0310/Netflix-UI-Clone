import React, { Component } from "react";
import styled from 'styled-components';
import bgimg from '../../img/bg.jpg';
import bgsmall from '../../img/bg-mobile.jpg';
import Nav from '../HomepageComponent/Nav/Nav';
import  LoginForm  from "./LoginForm";

const Header = styled.header`
    background: linear-gradient(
                to right,
                rgba(0, 0, 0, 0.75), 
                rgba(0, 0, 0, 0.09)
                ),
                url(${bgimg});
                height: 100vh;
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

class Login extends Component{
    render(){
        return(
            <Header>
                <Nav signInRendered={this.props.signInRendered}></Nav>
                <LoginForm />
            </Header>
        )
    }
}

export default Login;