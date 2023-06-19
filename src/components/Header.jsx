import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Logo from '../static/Logo';
import Drop from '../static/Drop';
import Triangle from '../static/Triangle';
import Dropdown from './Dropdown';

/* eslint linebreak-style: ["error", "windows"] */

export default function Header() {
  const [active,setActive] = useState(false);
  const [theme,setTheme] = useState(true);
  const weather = useSelector((state) => state.weatherSliceData.weather);
  const isWeatherLoaded = useSelector((state) => state.weatherSliceData.isWeatherLoaded);

  useEffect(()=>{
    if (theme) document.querySelector('body').setAttribute('data-theme', 'light')
    else document.querySelector('body').setAttribute('data-theme', 'dark')
  },[theme]);

  return (
    <header role="header" className="header">
      <Logo />
      <h1 className="header__title">WeatherApp</h1>
      <Drop handleTheme={e => setTheme(!theme)}/>
      <div role="select" onClick={e => setActive(!active)} className="header__select">
        <span className="header__select-text">Выбрать город</span>
        <Triangle active={active} setActive={setActive}/>
        {active && (
          <>
            <Dropdown city={isWeatherLoaded ? weather.name : ''}/>
            <div className="header__select-background" />
          </>
        )}
      </div>
    </header>
  );
}
