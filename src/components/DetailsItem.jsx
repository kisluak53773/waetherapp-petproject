import React from 'react';
import PropTypes from "prop-types"

export default function DetailsItem({image: Image, title, children}) {
  return (
    <span className="details__items-item">
      <div className="details__items-item-image">
        <Image />
      </div>
      <span className="details__items-item-title">{title}</span>
      <span className="details__items-item-description">
        {children}
      </span>
    </span>
  );
}

DetailsItem.propTypes = {
  image: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}
