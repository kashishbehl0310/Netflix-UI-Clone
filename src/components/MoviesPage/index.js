import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import Search from './Search';
import SearchResults from './SearchResults';
import netflixlogo from '../../img/download.svg';

class MoviesPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false,
            val: "",
            searchMovies: [],
            showResponse: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }
    componentDidMount(){
        var token = localStorage.getItem('jwtToken');
        if(token){
            this.setState({
                isLoggedIn: true
            })
        } else {
            this.props.history.push('/signin')
        }
    }
    handleLogout(){
        localStorage.removeItem('jwtToken');
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
        const { val, searchMovies, showResponse, isLoggedIn } = this.state;
        return(
            <div>
                <nav>
                    <a href={"/"} className="logo" >
                        <img src={netflixlogo} />
                    </a>
                    <div className="search-bar">
                        <Search 
                            value={val}
                            searchMovies={searchMovies}
                            showResponse = {showResponse}
                            handleChange={this.handleChange}
                        />
                    </div>
                </nav>
                {/* {
                    showResponse &&
                        <SearchResults 
                            searchResults = {searchMovies}
                        />
                } */}

                {
                    localStorage.getItem('jwtToken') &&
                        <button onClick={this.handleLogout} >Sign Out</button>
                }
            </div>
        )
    }
}

export default MoviesPage;