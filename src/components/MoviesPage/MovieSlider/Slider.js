import React ,{ useState } from "react";
import cx from "classnames";
import SliderContex from "./context";
import SlideButton from './SlideButton';
import SliderWrapper from "./SliderWrapper";
import useSliding from './useSliding';
import useSizeElement from './useSizeElement';
import Content from './Content';

const Slider = ({ children, activeSlide }) => {
    const [currentSlide, setCurrentSlide] = useState(activeSlide);
    const { width, elementRef } = useSizeElement();
    const {
        handleNext,
        handlePrev,
        hasNext,
        hasPrev,
        slideProps,
        containerRef
    } = useSliding(width, React.Children.count(children));

    const handleSelect = movie => {
        setCurrentSlide(movie);
    }
    const handleClose = () => {
        setCurrentSlide(null);
    }
    const contextValue = {
        onSelectSlide: handleSelect,
        onCLoseSlide: handleClose,
        elementRef,
        currentSlide
    }
    return(
        <SliderContex.Provider value={contextValue} >
            <SliderWrapper>
                <div className={cx('slider', {'slider--open': currentSlide != null})} >
                    <div ref={containerRef} className="slider__content" {...slideProps}>{children}</div>
                </div>  
                {hasPrev && <SlideButton onClick={handlePrev} type="prev" /> }
                {hasNext && <SlideButton onClick={handleNext} type="next" /> }
            </SliderWrapper>
                {currentSlide && <Content onClick={handleClose} movie={currentSlide} /> }
        </SliderContex.Provider>
    )
}

export default Slider;