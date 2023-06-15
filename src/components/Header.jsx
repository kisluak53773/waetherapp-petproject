import React, { useState,useCallback,useEffect } from 'react';
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

  const handleClick = useCallback(() => {
    setActive(!active)
  },[active]);

  const handleTheme = useCallback(() => {
    setTheme(!theme)
  },[theme]);

  useEffect(()=>{
    if (theme) document.querySelector('body').setAttribute('data-theme', 'light')
    else document.querySelector('body').setAttribute('data-theme', 'dark')
  },[theme]);

  return (
    <header role="header" className="header">
      <Logo />
      <h1 className="header__title">WeatherApp</h1>
      <Drop handleTheme={handleTheme}/>
      <div role="select" onClick={handleClick} className="header__select">
        <span className="header__select-text">Выбрать город</span>
        <Triangle active={active} setActive={setActive}/>
        {active && <Dropdown city={isWeatherLoaded ? weather.name : ''}/>}
      </div>
    </header>
  );
}
