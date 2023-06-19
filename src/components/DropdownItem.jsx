import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchWeather } from '../slices/weatherSlice';

/* eslint linebreak-style: ["error", "windows"] */

export default function DropdownItem({ item }) {
  const dispatch = useDispatch();

  const handleClick = useCallback((e) => {
    dispatch(fetchWeather({ city: e.target.textContent }));
  });

  return (
    <li role="item" onClick={handleClick} className="dropdown__item">{item}</li>
  );
}

DropdownItem.propTypes = {
  item: PropTypes.string.isRequired,
};
