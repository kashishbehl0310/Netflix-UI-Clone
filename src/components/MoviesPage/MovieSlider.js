import React, { Component } from 'react';
import Slider from './NetflixSlider'; 

class MovieSlider extends Component {
  constructor(props){
      super(props);
      this.mounted = false;
      this.state = {
          movies: this.props.movies,
          showMovies: false
      }
  }
  render() {
    
    const { movies, showMovies } = this.state;
    return (
      
      <div className="app">
      <h1 style={{color: "#fff"}} >{this.props.header}</h1>
      {
        this.state && this.state.movies &&
          // console.log(this.state.movies)
          <Slider>
            {this.state.movies.slice(0,20).map(movie => (
              <Slider.Item movie={movie} key={movie.id} >item1</Slider.Item>
            ))}
          </Slider>
      }
      </div>
    );
  }
}

export default MovieSlider;