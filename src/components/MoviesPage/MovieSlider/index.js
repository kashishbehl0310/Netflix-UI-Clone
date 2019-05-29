import React ,{ Component } from "react";
import Slider from './SliderContainer';
import Slide1 from '../../../img/slide1.jpg'
import Slide2 from '../../../img/slide2.jpg'
import Slide3 from '../../../img/slide3.jpg'
import Slide4 from '../../../img/slide4.jpg'
import Slide5 from '../../../img/slide5.jpg'
import Slide6 from '../../../img/slide6.jpg'


const movies = [
    {
      id: 1,
      image: Slide1,
      imageBg: '../../../img/slide1b.webp',
      title: '1983'
    },
    {
      id: 2,
      image: Slide2,
      imageBg: '../../../img/slide2b.webp',
      title: 'Russian doll'
    },
    {
      id: 3,
      image: Slide3,
      imageBg: '../../../img/slide3b.webp',
      title: 'The rain',
    },
    {
      id: 4,
      image: Slide4,
      imageBg: '../../../img/slide4b.webp',
      title: 'Sex education'
    },
    {
      id: 5,
      image: Slide5,
      imageBg: '../../../img/slide5b.webp',
      title: 'Elite'
    },
    {
      id: 6,
      image: Slide6,
      imageBg: '../../../img/slide6b.webp',
      title: 'Black mirror'
    }
];

class MovieSlider extends Component{
    render(){
        return(
            <div className="slider">
                <Slider>
                    {movies.map(movie => (
                        <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
                    ))}
                </Slider>
            </div>
        )
    }
}

export default MovieSlider;

