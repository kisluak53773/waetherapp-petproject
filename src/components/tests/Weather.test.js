import { renderWithContext, getStateWithItems } from "../../test-utils";
import { screen } from "@testing-library/react";
import Weather from "../Weather";

const mockData = {
  main: {
    temp: "23.21",
    feels_like: "23.21",
    pressure: 750,
  },
  name: "Минск",
  weather: [
    {
      description: "ясно",
    },
  ],
};

jest.mock("axios");

describe("Weather component", () => {
  it("should render", () => {
    renderWithContext(<Weather />);
    expect(screen.getByRole("weatherSkeleton")).toBeInTheDocument();
  });
  it("should render weather", async () => {
    const state = getStateWithItems({
      weather: mockData,
      isWeatherLoaded: true,
    });
    renderWithContext(<Weather />, state);
    expect(screen.getByRole("weather")).toBeInTheDocument();
  });
});
