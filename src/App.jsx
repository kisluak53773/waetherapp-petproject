import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchWeather } from './slices/weatherSlice';
import Details from './components/Details';
import Weather from './components/Weather';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();
  const error = useSelector(state => state.weatherSliceData.error)

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      dispatch(fetchWeather({lat:position.coords.latitude,lon:position.coords.longitude}));
    })
  });

  return (
    error !== "" ? (
      <>
      <Header />
      <section className="current">
        <Weather />
        <Details />
      </section>
    </>
    ) : <h1>Error occurred</h1>
  );
}

export default App;
