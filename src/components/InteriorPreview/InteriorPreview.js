import React from 'react';
import PropTypes from 'prop-types';
// Styles
import './InteriorPreview.css';

/*
 * TODO
 *
 * Requirements:
 * - use React hooks if needed
 * - use performance optimization if needed
 * 
 */  
const InteriorPreview = ({ interior = null }) => {
  return (
    <div className="interior-preview">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs />
        <image
          alt=''
          title={interior?.label}
          width="100%"
          height="100%"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xlinkHref={`${process.env.PUBLIC_URL}/interiors/${interior?.value}.jpeg`}
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>
    </div>
  );
};

InteriorPreview.propTypes = {
  interior: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  })
};

export default InteriorPreview;
