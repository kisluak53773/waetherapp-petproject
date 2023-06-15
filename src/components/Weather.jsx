import React, { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import WeatherState from './WeatherState';
import WeatherSkeleton from './skeletons/WeatherSkeleton';

/* eslint linebreak-style: ["error", "windows"] */

export default function Weather() {
  const weather = useSelector((state) => state.weatherSliceData.weather);
  const isWeatherLoaded = useSelector((state) => state.weatherSliceData.isWeatherLoaded);
  let today = new Date();
  const [time,setTime] = useState(today.toLocaleTimeString().slice(0, -3));

  useEffect(() => {
      let timer=setInterval(() => {
          let today = new Date();
          setTime(today.toLocaleTimeString().slice(0, -3))
      }, 60000);
      return () => clearInterval(timer);
  }, [time])

  return (
    isWeatherLoaded ? (
      <div role="weather" className="weather">
        <div className="weather__temperature">
          <div className="weather__temperature-data">
            <span className="weather__temperature-data-celsius">
              {String(weather.main.temp).slice(0, -3)}
              <sup>o</sup>
            </span>
            <p className="weather__temperature-data-today">Сегодня</p>
          </div>
          <WeatherState type={weather.weather[0].description} />
        </div>
          <span className="weather__time">Время {time}</span>
          <span className="weather__city">Город: {weather.name}</span>
      </div>
    ) : <WeatherSkeleton />
  )
}
