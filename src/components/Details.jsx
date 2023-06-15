import React from 'react';
import { useSelector } from 'react-redux';
import Temperature from '../static/Temperature';
import Precipitation from '../static/Precipitation';
import Wind from '../static/Wind';
import Preasure from '../static/Preasure';
import DetailsSkeleton from './skeletons/DetailsSkeleton';

/* eslint linebreak-style: ["error", "windows"] */

const windDirection = (degrees) => {
  if (degrees > 0 && degrees <= 45) {
    return 'северо-восток';
  } if (degrees > 45 && degrees <= 90) {
    return 'восток';
  } if (degrees > 90 && degrees <= 135) {
    return 'юго-восток';
  } if (degrees > 135 && degrees <= 180) {
    return 'юг';
  } if (degrees > 180 && degrees <= 225) {
    return 'юго-запад';
  } if (degrees > 225 && degrees <= 270) {
    return 'запад';
  } if (degrees > 270 && degrees <= 315) {
    return 'северо-запад';
  }
  return 'север';
};

export default function Details() {
  const weather = useSelector((state) => state.weatherSliceData.weather);
  const isWeatherLoaded = useSelector((state) => state.weatherSliceData.isWeatherLoaded);
  const direction = isWeatherLoaded ? windDirection(Number(weather.wind.deg)) : 0;

  return (
    isWeatherLoaded ? (
      <div role="details" className="details">
        <div className="details__items">
          <span className="details__items-item">
            <div className="details__items-item-image">
              <Temperature />
            </div>
            <span className="details__items-item-title">Температура</span>
            <span className="details__items-item-description">
              {String(weather.main.temp).slice(0, -3)}
              <sup>o</sup>
              - ощущается как
              {String(weather.main.feels_like).slice(0, -3)}
              <sup>o</sup>
            </span>
          </span>
          <span className="details__items-item">
            <div className="details__items-item-image">
              <Preasure />
            </div>
            <span className="details__items-item-title">Давление</span>
            <span className="details__items-item-description">
              {weather.main.pressure}
              мм ртутного столба -
              {Number(weather.main.pressure) <= 760 ? 'Нормальное' : 'Повышеное'}
            </span>
          </span>
          <span className="details__items-item">
            <div className="details__items-item-image">
              <Precipitation />
            </div>
            <span className="details__items-item-title">Осадки</span>
            <span className="details__items-item-description">
              {weather.rain ? 'Присутствуют осадки' : 'Без осадков'}
            </span>
          </span>
          <span className="details__items-item">
            <div className="details__items-item-image">
              <Wind />
            </div>
            <span className="details__items-item-title">Ветер</span>
            <span className="details__items-item-description">
              {String(weather.wind.speed).split('.')[0]} м/с {direction} - легкий ветер
            </span>
          </span>
        </div>
      </div>
    ) : <DetailsSkeleton />
  );
}
