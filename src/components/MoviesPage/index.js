import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Header from "./Header/index"

class MoviesPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }
    componentDidMount(){
        var token = localStorage.getItem('jwtToken');
        if(token){
            this.setState({
                isLoggedIn: true
            })
        }
    }
    render(){
        return(
            <div>
                <Header />
                <h1 style={{color: "#fff"}}>Movies Page - {this.state.isLoggedIn ? "true": "false"}</h1>
            </div>
        )
    }
}

export default MoviesPage;