import React, { Component } from 'react';
import Slider from './NetflixSlider';
import slide1 from '../img/slide1.jpg';
import slide2 from '../img/slide2.jpg';
import slide3 from '../img/slide3.jpg';
import slide4 from '../img/slide4.jpg';
import slide5 from '../img/slide5.jpg';
import slide6 from '../img/slide6.jpg';

const moviesList = [
  {
    id: 1,
    image: "/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg",
    imageBg: '/v4yVTbbl8dE1UP2dWu5CLyaXOku.jpg',
    title: '1983'
  },
  {
    id: 2,
    image: slide2,
    imageBg: 'https://i.ibb.co/dpTj41j/ezgif-com-webp-to-jpg-1.jpg',
    title: 'Russian doll'
  },
  {
    id: 3,
    image: slide3,
    imageBg: 'https://i.ibb.co/s9y6qqb/ezgif-com-webp-to-jpg-3.jpg',
    title: 'The rain',
  },
  {
    id: 4,
    image: slide4,
    imageBg: 'https://i.ibb.co/QYrMmXg/ezgif-com-webp-to-jpg-4.jpg',
    title: 'Sex education'
  },
  {
    id: 5,
    image: slide5,
    imageBg: 'https://i.ibb.co/6Y4GXFk/ezgif-com-webp-to-jpg-5.jpg',
    title: 'Elite'
  },
  {
    id: 6,
    image: slide6,
    imageBg: 'https://i.ibb.co/WfBzLJZ/ezgif-com-webp-to-jpg-6.jpg',
    title: 'Black mirror'
  }
];

class MovieSlider extends Component {
  constructor(props){
      super(props);
      this.state = {
          movies: [],
          showMovies: false
      }
  }


  render() {
    
    // const { movies, showMovies } = this.state;
    return (
      <div className="app">
        <Slider>
          {/* {moviesList.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))} */}
          {
              movies.length ? movies.map(movie => (
                  console.log(movie)
              )) : console.log(null)
          }
        </Slider>
      </div>
    );
  }
}

export default MovieSlider;