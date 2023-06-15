import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { CITIES } from '../constants';
import DropdownItem from './DropdownItem';

/* eslint linebreak-style: ["error", "windows"] */

const Dropdown = memo(({ city, setActive }) => {
  const cities = [...CITIES];
  const filteredCities = cities.filter((item) => item !== city);

  return (
    <ul role="dropdown" className="dropdown">
      {filteredCities.map((item,index) => <DropdownItem key={index} setActive={setActive} item={item} />)}
    </ul>
  );
});

Dropdown.propTypes = {
  city: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default Dropdown;
