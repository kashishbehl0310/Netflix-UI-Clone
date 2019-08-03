import React, { Component } from "react";
import jwt_decode from 'jwt-decode';
import { Redirect, Link } from "react-router-dom";
import Search from './Search';
import SearchResults from './SearchResults';
import MovieParent from './movieParent';
import Trending from './Trending';
import netflixlogo from '../../img/download.svg';

class MoviesPage extends Component{
    constructor(props){
        super(props);
        this.movies = {
            upcoming: {
                apiCall: "upcoming",
                header: "Upcoming"
            }
        }
        this.state = {
            isLoggedIn: false,
            val: "",
            searchMovies: [],
            showResponse: false,
            randomVal: "ssjkaljal",
            user: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }
    getCurrentUser(){
        const current_user = jwt_decode(localStorage.getItem('jwtToken'), {header: false})
        console.log(current_user);
    }
    componentDidMount(){
        var token = localStorage.getItem('jwtToken');
        const user = jwt_decode(localStorage.getItem('jwtToken'), {header: false})
        console.log(user)
        if(token){
            this.setState({
                isLoggedIn: true,
                user: user
            })
            
        } else {
            this.props.history.push('/signin')
        }
    }
    handleLogout(){
        console.log("logged out")
        localStorage.removeItem('jwtToken');
        this.props.history.push('/signin');
        window.location.reload();
    }
    handleChange(e){
        this.setState({ val: e});
        if (e !== "")
            fetch(`
                https://api.themoviedb.org/3/search/movie?api_key=dd05e29e29370cfb76592b26e8b573d4&language=en-US&query=${e}&page=1&include_adult=false`)
            .then(r => r.json())
            .then(data => {
                this.setState({
                    searchMovies: data.results, 
                    showResponse: true
                })
            })
            .catch(err => console.log(err));
        else if (e === "") this.setState({ showResponse: false });
    }
    render(){
        const { val, searchMovies, showResponse, isLoggedIn, randomVal } = this.state;
        const movies = {
            upcoming: {
              apiCall: "upcoming",
              header: "Upcoming"
            },
            topRated: {
              apiCall: "top_rated",
              header: "Popular on Netflix"
            },
            action: {
              apiCall: 28,
              header: "Action"
            },
            adventure: {
              apiCall: 12,
              header: "Adventure"
            },
            animation: {
              apiCall: 16,
              header: "Animation"
            },
            comedy: {
              apiCall: 35,
              header: "Comedy"
            },
            crime: {
              apiCall: 80,
              header: "Crime"
            },
            drama: {
              apiCall: 18,
              header: "Drama"
            },
            documentary: {
              apiCall: 99,
              header: "Documentary"
            },
            romance: {
              apiCall: 10749,
              header: "Romance"
            }
          };
        return(
            <div>
                {/* {
                    showResponse &&
                        <SearchResults 
                            searchResults = {searchMovies}
                        />
                } */}
               
                {
                    <Trending 
                        value={val}
                        searchMovies={searchMovies}
                        showResponse={showResponse}
                        handleChange={this.handleChange}
                        user={this.state.user}
                        handleLogout = {this.handleLogout}
                    />
                }
                
                {
                    Object.keys(movies).map((item, i) => (
                        <div key={i}>
                            {/* <h1 style={{color:"#fff"}}>{movies[item].header}</h1> */}
                            <MovieParent user={this.state.user} header={movies[item].header} apiCall={movies[item].apiCall} />
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default MoviesPage;