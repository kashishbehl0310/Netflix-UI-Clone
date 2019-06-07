import React, { Component } from "react";
import MovieSlider from './MovieSlider';

class MovieParent extends Component{
    constructor(props){
        super(props);
        this.mounted = false;
        this.state = {
            movies: [],
            sendResponse: false,
        }
    }
    componentDidMount(){
        this.mounted = true;
        const url = typeof this.props.apiCall === "number"
            ? `https://api.themoviedb.org/3/discover/movie?api_key=dd05e29e29370cfb76592b26e8b573d4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${this.props.apiCall}` 
            : `https://api.themoviedb.org/3/movie/${this.props.apiCall}?api_key=dd05e29e29370cfb76592b26e8b573d4&language=en-US&page=1`
        // fetch(`https://api.themoviedb.org/3/discover/movie?api_key=dd05e29e29370cfb76592b26e8b573d4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
        fetch(url)
        .then(r => r.json())
        .then(data => {
        if(this.mounted){
            this.setState({
            movies: data.results,
            sendResponse: true
            })
        }
        })
        .catch(err => console.log(err))
    }
    render(){
        return(
            <div>
                {
                    (this.state && this.state.movies.length) ? <MovieSlider header={this.props.header} movies={this.state.movies} /> : <h1 style={{color: "#ffff"}} >Loading ....</h1>
                }
            </div>
        )
    }
}

export default MovieParent;