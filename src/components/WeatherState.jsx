import React from 'react';
import PropTypes from 'prop-types';
import Sun from '../static/Sun';
import Murky from '../static/Murky';
import Rain from '../static/Rain';
import SmallRain from '../static/SmallRain';
import SmallRainAndSun from '../static/SmallRainAndSun';

/* eslint linebreak-style: ["error", "windows"] */

export default function WeatherState({ type }) {
  switch (type) {
    case 'дождь': return <Rain />;
    case 'облачно с прояснениями': return <SmallRainAndSun />;
    case 'небольшой дождь': return <SmallRain />;
    case 'ясно': return <Sun />;
    case 'пасмурно': return <Murky />;
    default: return <h1>Something went wrong</h1>;
  }
}

WeatherState.propTypes = {
  type: PropTypes.string.isRequired,
};
