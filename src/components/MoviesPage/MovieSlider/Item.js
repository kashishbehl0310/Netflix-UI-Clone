import React from "react";
import cx from 'classnames';
import SliderContext from './context';
import Mark from './Mark';
import ShowDetailButton from './ShowDetailButton';

const Item = ({movie}) => (
    <SliderContext.Consumer>
        {({onSelectSide, currentSlide, elementRef}) => {
            const isActive = currentSlide && currentSlide.id === movie.id;
            return(
                <div 
                    ref={elementRef}
                    className={cx('item', {
                        'item--open': isActive
                    })}
                >
                    <img src={movie.image} alt="" />
                    <ShowDetailButton onClick={() => {onSelectSide(movie)}} />
                    {isActive && <Mark />}
                </div>
            )
        }}
    </SliderContext.Consumer>
)

export default Item;