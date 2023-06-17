import React, { useEffect }  from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { fetchWeather } from './slices/weatherSlice';
import Details from './components/Details';
import Weather from './components/Weather';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      dispatch(fetchWeather({lat:position.coords.latitude,lon:position.coords.longitude}));
    })
  });

  return (
    <>
      <Header />
      <section className="current">
        <Weather />
        <Details />
      </section>
    </>
  );
}

export default App;
