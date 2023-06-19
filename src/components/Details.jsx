import React from 'react';
import { useSelector } from 'react-redux';
import Temperature from '../static/Temperature';
import Precipitation from '../static/Precipitation';
import Wind from '../static/Wind';
import Preasure from '../static/Preasure';
import DetailsSkeleton from './skeletons/DetailsSkeleton';
import { windDirection } from '../constants';
import DetailsItem from './DetailsItem';

/* eslint linebreak-style: ["error", "windows"] */

export default function Details() {
  const weather = useSelector((state) => state.weatherSliceData.weather);
  const isWeatherLoaded = useSelector((state) => state.weatherSliceData.isWeatherLoaded);
  const direction = isWeatherLoaded ? windDirection(Number(weather.wind.deg)) : 0;

  return (
    isWeatherLoaded ? (
      <div role="details" className="details">
        <div className="details__items">
          <DetailsItem image={Temperature}>
            {String(weather.main.temp).slice(0, -3)}
            <sup>o</sup>
            - ощущается как
            {String(weather.main.feels_like).slice(0, -3)}
            <sup>o</sup>
          </DetailsItem>
          <DetailsItem image={Preasure}>
          {weather.main.pressure}
            мм ртутного столба -
            {Number(weather.main.pressure) <= 760 ? 'Нормальное' : 'Повышеное'}
          </DetailsItem>
          <DetailsItem image={Precipitation}>
            {weather.rain ? 'Присутствуют осадки' : 'Без осадков'}
          </DetailsItem>
          <DetailsItem image={Wind} >
           {String(weather.wind.speed).split('.')[0]} м/с {direction} - легкий ветер
          </DetailsItem>
        </div>
      </div>
    ) : <DetailsSkeleton />
  );
}
