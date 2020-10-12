import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import DateCard from '../DateCard/DateCard';
import styled from 'styled-components';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

import useWindowDimensions from '../../hooks/useWindowDimensions';

import 'pure-react-carousel/dist/react-carousel.es.css';

const ListWrapper = styled.div`
  width: 100%;
  height: 140px;
  right: 0;
  position: absolute;
  bottom: 88px;
  .carousel__slider {
    &:focus {
      outline: none;
    }
  }
`;

const DailyList = ({ feelings }) => {
  const feelingCount = Object.keys(feelings).length;

  const [activeIndex, setActiveIndex] = useState(feelingCount);
  const [displayCount, setDisplayCount] = useState(1);
  const { width } = useWindowDimensions();

  const handleFocus = (e) => {
    console.log(e);
  };

  useEffect(() => {
    setDisplayCount(width / 225);
  }, [width]);

  return (
    <ListWrapper>
      <CarouselProvider
        naturalSlideWidth={1}
        naturalSlideHeight={0.67}
        totalSlides={feelingCount}
        currentSlide={activeIndex}
        visibleSlides={displayCount}
        onFocus={handleFocus}
      >
        <Slider>
          {Object.keys(feelings).map((key, index) => {
            const feeling = feelings[key];
            return (
              <Slide
                index={index}
                key={index}
                onFocus={(e) => {
                  setActiveIndex(index);
                }}
              >
                <DateCard
                  opacity={(index + 1) / activeIndex}
                  date={key}
                  {...feeling}
                />
              </Slide>
            );
          })}
        </Slider>
      </CarouselProvider>
    </ListWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    feelings: state.feel.feelings,
  };
};

export default connect(mapStateToProps, {})(DailyList);
