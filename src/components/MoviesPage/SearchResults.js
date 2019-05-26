import React, { Component } from "react";

class SearchResults extends Component{
    render(){
        const { 
            searchResults
        } = this.props;

        const movies = searchResults.length
        ? searchResults.map(movie => {
            return(
                <div className="single-movie">
                    <h3 style={{color: "white", fontSize: "12px"}}>
                        {movie.title}
                    </h3>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
                </div>
            )
        }) : null;
        return(
            <div>
                {movies}
            </div>
        )
    }
}

export default SearchResults;