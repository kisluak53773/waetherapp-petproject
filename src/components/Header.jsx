import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Logo from '../static/Logo';
import Drop from '../static/Drop';
import Triangle from '../static/Triangle';
import Dropdown from './Dropdown';

/* eslint linebreak-style: ["error", "windows"] */

export default function Header() {
  const [active,setActive] = useState(false);
  const [theme,setTheme] = useState(true);
  const [position,setPosition] = useState({})
  const weather = useSelector((state) => state.weatherSliceData.weather);
  const isWeatherLoaded = useSelector((state) => state.weatherSliceData.isWeatherLoaded);
  const dropdown = useRef()

  useEffect(()=>{
    if (theme) document.querySelector('body').setAttribute('data-theme', 'light');
    else document.querySelector('body').setAttribute('data-theme', 'dark');
    setPosition(dropdown.current)
  },[theme, position]);

  return (
    <header role="header" className="header">
      <Logo />
      <h1 className="header__title">WeatherApp</h1>
      <Drop handleTheme={e => setTheme(!theme)}/>
      <div ref={dropdown} role="select" onClick={e => setActive(!active)} className="header__select">
        <span className="header__select-text">Выбрать город</span>
        <Triangle active={active} setActive={setActive}/>
        {active && (
          <>
            <Dropdown position={position.getBoundingClientRect()} city={isWeatherLoaded ? weather.name : ''}/>
            <div className="header__select-background" />
          </>
        )}
      </div>
    </header>
  );
}
