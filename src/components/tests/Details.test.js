import { renderWithContext, getStateWithItems } from "../../test-utils";
import { screen } from "@testing-library/react";
import Details from "../Details";

const mockData = {
  main: {
    temp: "23.21",
  },
  wind: {
    speed: "13.43",
    deg: "180",
  },
};

describe("Details component", () => {
  it("should render", () => {
    renderWithContext(<Details />);
    expect(screen.getByRole("detailsSkeleton")).toBeInTheDocument();
  });
  it("should render weather details", () => {
    const state = getStateWithItems({
      weather: mockData,
      isWeatherLoaded: true,
    });
    renderWithContext(<Details />, state);
    expect(screen.getByRole("details")).toBeInTheDocument();
  });
});
