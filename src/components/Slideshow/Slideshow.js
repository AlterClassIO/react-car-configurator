import React from 'react';
import PropTypes from 'prop-types';
// Styles
import './Slideshow.css';

/*
 * TODO
 *
 * Requirements:
 * - use React hooks if needed
 * - use performance optimization if needed
 * 
 */ 
const Slideshow = ({
  items = [],
  index = 0,
  showPrev = true,
  showNext = true,
  onClickPrev = () => null,
  onClickNext = () => null
}) => (
  <div className="slideshow">
    {
      items.map((item, i) => (
        <div
          key={item.alt}
          className={
            i === index
              ? 'slideshow-slide active'
              : 'slideshow-slide'
          }
        >
          <img
            src={item.url}
            alt={item.alt}
            className={item.scale ? 'scale' : null}
          />
        </div>
      ))
    }
    {showPrev
      ? (
        <span
          onClick={onClickPrev}
          className="arrow arrow-prev"
        />
      ) : null
    }
    {showNext
      ? (
        <span
          onClick={onClickNext}
          className="arrow arrow-next"
        />
      ) : null
    }
  </div>
);

Slideshow.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      alt: PropTypes.string,
      url: PropTypes.string,
      scale: PropTypes.bool
    })
  ),
  index: PropTypes.number,
  showPrev: PropTypes.bool,
  showNext: PropTypes.bool,
  onClickPrev: PropTypes.func,
  onClickNext: PropTypes.func
};

export default Slideshow;
