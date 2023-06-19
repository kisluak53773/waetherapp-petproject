import React, { memo, useState} from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { CITIES } from '../constants';
import DropdownItem from './DropdownItem';

/* eslint linebreak-style: ["error", "windows"] */

const Dropdown = memo(({ city }) => {
  const weather = useSelector((state) => state.weatherSliceData.weather);
  const isWeatherLoaded = useSelector((state) => state.weatherSliceData.isWeatherLoaded);
  const cities = isWeatherLoaded ? [...CITIES[weather.sys.country]] : [...CITIES["BY"]];
  const [search,setSearch] = useState('')
  const filteredCities = cities.filter((item) => {
    return item !== city && item.toLowerCase().includes(search.toLowerCase())
  });

  return (
    <>
      <ul role="dropdown" className="dropdown">
       <li role="item" className="dropdown__item">
         <input value={search} onChange={(e) => setSearch(e.target.value)} onClick={(e) => { e.stopPropagation()}} className="dropdown__item-search"/>
       </li>
       {filteredCities.map((item,index) => <DropdownItem key={index} item={item} />)}
      </ul>
    </>
  );
});

Dropdown.propTypes = {
  city: PropTypes.string.isRequired,
};

export default Dropdown;
