import React from 'react';
import Skeleton from './Skeleton';

export default function WeatherSkeleton() {
  return (
    <div role="weatherSkeleton" className="weather">
      <div className="weather__temperature">
        <div className="weather__temperature-data">
          <span className="weather__temperature-data-celsius">
            <Skeleton classes={'skeleton__temperature'} />
          </span>
          <p className="weather__temperature-data-today">
            <Skeleton classes={'skeleton__today'} />
          </p>
        </div>
        <Skeleton classes={'skeleton__img'} />
      </div>
      <span className="weather__time">
        <Skeleton classes={'skeleton__time'} />
      </span>
      <span className="weather__city">
        <Skeleton classes={'skeleton__city'} />
      </span>
    </div>
  );
}
