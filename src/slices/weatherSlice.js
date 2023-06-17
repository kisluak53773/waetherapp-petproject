import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { REACT_API_KEY } from "../constants";

/* eslint linebreak-style: ["error", "windows"] */

const initialState = {
  weather: {},
  isWeatherLoaded: false,
  error: "",
};

export const fetchWeather = createAsyncThunk(
  "weather/fetch",
  async ({ lat, lon, city = null }) => {
    try {
      var latitude = lat;
      var longitude = lon;
      if (city) {
        const { data } = await axios.get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${REACT_API_KEY}`
        );
        latitude = data[0].lat;
        longitude = data[0].lon;
      }
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=ru&units=metric&appid=${REACT_API_KEY}`
      );
      return response.data;
    } catch (err) {
      console.log("While fetching weather failed this error occurred:" + err);
      return {};
    }
  }
);

const weatherSlice = createSlice({
  name: "weatherSliceData",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.weather = { ...state.weather, ...action.payload };
      state.isWeatherLoaded = true;
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default weatherSlice;
