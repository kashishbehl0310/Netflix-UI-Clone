import React, { Component } from 'react';
import jwt_decode from 'jwt-decode'
import HeaderNav from './Navbar';
import MovieSlider from './MovieSlider';

export default class Mylist extends Component{
    constructor(props){
        super(props);
        this.mounted = false;
        this.state = {
            listMovies: [],
            user:{}
        }
    }

    componentDidMount(){
        // console.log(this.props.location.userProps)
        const user = jwt_decode(localStorage.getItem('jwtToken'), {header: false})
        // console.log(user)
        this.setState({
            user: user
        })
        fetch(` https://limitless-spire-75144.herokuapp.com/api/movies/getUsersMovieList/5cd52f55392819319446d6d9`)
            .then(r => r.json())
            .then((data) => {
                // console.log(data)
            })
            .catch(err => console.log("An error occured" + err))
    }
    render(){
        // console.log(this.props.location.userProps)
        return(
            <div>
                {
                    (this.state && this.state.listMovies) ? <MovieSlider header={"My List"} movies={this.state.listMovies} /> : <h1 style={{color: "#fff"}} >Loading...</h1>
                }
            </div>
        )
    }
}