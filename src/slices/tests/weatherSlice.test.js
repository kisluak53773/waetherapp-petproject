import weatherSlice, { fetchWeather } from "../weatherSlice";
import axios from "axios";
import { REACT_API_KEY } from "../../constants";
import { getStoreWithState } from "../../store";

jest.mock("axios");

const mockData = {
  data: {
    lat: 1,
    long: 1,
  },
};

describe("WeatherSlice", () => {
  it("should return an empty state when passed an empty action", () => {
    const initialState = undefined;
    const action = { type: "" };
    const result = weatherSlice.reducer(initialState, action);
    expect(result).toEqual({
      weather: {},
      isWeatherLoaded: false,
      error: "",
    });
  });
  describe("async thunk", () => {
    it("should fetch current weather", async () => {
      axios.get.mockResolvedValueOnce(mockData);
      const dispatch = jest.fn();
      const thunk = fetchWeather({ lat: 1, lon: 1 });
      await thunk(dispatch);
      const { calls } = dispatch.mock;
      const [start, end] = calls;
      expect(start[0].type).toBe(fetchWeather.pending().type);
      expect(end[0].type).toBe(fetchWeather.fulfilled().type);
      expect(end[0].payload).toEqual({
        lat: 1,
        long: 1,
      });
      expect(axios.get).toHaveBeenCalledWith(
        `https://api.openweathermap.org/data/2.5/weather?lat=1&lon=1&lang=ru&units=metric&appid=${REACT_API_KEY}`
      );
    });
  });
  describe("extra reducers", () => {
    it("should set weather", async () => {
      axios.get.mockResolvedValueOnce(mockData);
      const state = {
        weatherSliceData: {
          weather: {},
          isWeatherLoaded: false,
        },
      };
      const store = getStoreWithState(state);
      await store.dispatch(fetchWeather({ lat: 1, lon: 1 }));
      expect(store.getState().weatherSliceData.isWeatherLoaded).toBe(true);
      expect(store.getState().weatherSliceData.weather).toStrictEqual({
        lat: 1,
        long: 1,
      });
    });
  });
});
