import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Search extends Component{
    constructor(props){
        super(props);
        this.mounted= false;
        this.state = {
            val: "",
            searchMovie:  [],
            showResponse: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.closeResponse = this.closeResponse.bind(this);
    }
    // dd05e29e29370cfb76592b26e8b573d4
    componentDidMount(){
        this.mounted = true;
    }
    handleChange(e){
        this.setState({ val: e.target.value });
        if (e.target.value !== "")
          fetch(`
        https://api.themoviedb.org/3/search/movie?api_key=dd05e29e29370cfb76592b26e8b573d4&language=en-US&query=${
          e.target.value
        }&page=1&include_adult=false`)
            .then(r => r.json())
            .then(data => {
              if (this.mounted)
                this.setState({ searchMovie: data.results, showResponse: true });
            })
            .catch(err => console.log(err));
        else if (e.target.value === "") this.setState({ showResponse: false });
    };
    closeResponse(){
        this.setState({
            showResponse: false
        })
    }
    componentWillUnmount(){
        this.mounted = false;
    }
    render(){
        const { val, searchMovie, showResponse } = this.state;
        const movies = searchMovie.length 
            ? searchMovie.map(movie => {
                return(
                    <li key={movie.id}>
                        <Link to={"/"} onClick={this.closeResponse}>
                            {movie.title}
                        </Link>
                    </li>
                )
            }) : null
        return(
            <React.Fragment>
                <input 
                    type="text"
                    name="searchMovie"
                    className="search-input"
                    onChange={this.handleChange}
                    placeholder="Search for programme, film, genre etc. "
                    value={val}
                />
                {
                    showResponse && (
                        <div className="search-results">
                            <ul>{movies}</ul>
                        </div>
                    )
                }
            </React.Fragment>
        )
    }
}