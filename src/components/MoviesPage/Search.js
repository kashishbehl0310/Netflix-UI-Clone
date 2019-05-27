import React, { Component } from "react";
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
                <div className="search-item">
                    <Link>
                        <div className="thumbnail-container">
                            <div className="card card-img-container" >
                                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
                            </div>
                        </div>
                        <div className="search-wrap">
                            <div className="meta-wrapper">
                                <div className="title">
                                    <span className="content-title">{movie.title}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        }) : null;
        return(
            <React.Fragment  >
                <input 
                    className="search-input"
                    placeholder="Title, people, genres"
                    onChange={(e) => handleChange(e.target.value)}
                />
                {
                    showResponse &&
                        <div className="search-values">
                            {movies}
                        </div>
                }
            </React.Fragment>
        )
    }
}
