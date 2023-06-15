import { Provider } from "react-redux";
import { getStoreWithState } from "./store";
import { render } from "@testing-library/react";

export function renderWithContext(element, state) {
  const store = getStoreWithState(state);
  const utils = render(<Provider store={store}>{element}</Provider>);
  return { store, ...utils };
}

export function getStateWithItems({ weather = {}, isWeatherLoaded = false }) {
  const state = {
    weatherSliceData: {
      weather,
      isWeatherLoaded,
    },
  };
  return state;
}
