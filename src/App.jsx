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
      dispatch(fetchWeather({ lat:position.coords.latitude, lon:position.coords.longitude }));
    })
  });

  return error === "" ? (
    <>
      <Header />
      <section className="current">
        <Weather />
        <Details />
      </section>
    </>
  ) : (
    <div className="error">
      <h1>Error {error} occured</h1>
    </div>
  )
}

export default App;
