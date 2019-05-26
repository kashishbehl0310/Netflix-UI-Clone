import React, { Component } from "react";
import propTypes from 'prop-types';

export default class Search extends Component{
    constructor(props){
        super(props);
        this.mounted = false;
    }
    componentDidMount(){
        this.mounted = true;
    }
    render(){
        const {
            value,
            searchMovies,
            showResponse,
            handleChange
        } = this.props;
        const movies = searchMovies.length
        ? searchMovies.map(movie => {
            return(
                <li key={movie.id}>
                    {movie.title}
                </li>
            )
        }) : null;
        return(
            <React.Fragment  >
                <input 
                    className="search-input"
                    placeholder="Title, people, genres"
                    onChange={(e) => handleChange(e.target.value)}
                />
                {/* {
                    showResponse &&
                        <div className="search-values">
                            <ul>{movies}</ul>
                        </div>
                } */}
            </React.Fragment>
        )
    }
}
