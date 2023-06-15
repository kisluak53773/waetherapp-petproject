import { renderWithContext } from "../../test-utils";
import { screen } from "@testing-library/react";
import Dropdown from "../Dropdown";

describe("DropDown component", () => {
  it("should render", () => {
    renderWithContext(<Dropdown city={""} setActive={jest.fn()} />);
    expect(screen.getByRole("dropdown")).toBeInTheDocument();
  });
});
