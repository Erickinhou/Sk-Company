import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ImageWrapper, ObjectWrapper} from './ImageWithFallback.style'

class ImageWithFallback extends Component {
  render() {
    const {
      alt, imageUrl, imageUrlFallback, className,
    } = this.props;
    return (
      // If the object can't load the imageUrl, it will fallback to the Image inside the <object>
      <div className= {`${className}`}>
        <ObjectWrapper data={imageUrl} type="image/png" className={`flex-middle`}>
          <ImageWrapper src={imageUrlFallback} alt={alt} className="w-100" />
        </ObjectWrapper>
      </div>
    );
  }
}

ImageWithFallback.propTypes = {
  alt: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  imageUrlFallback: PropTypes.string.isRequired,
};

export default ImageWithFallback;
