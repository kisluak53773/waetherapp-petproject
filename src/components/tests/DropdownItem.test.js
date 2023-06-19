import { renderWithContext } from "../../test-utils";
import { screen } from "@testing-library/react";
import DropdownItem from "../DropdownItem";

describe("DropDown component", () => {
  it("should render", () => {
    renderWithContext(<DropdownItem item={"Минск"} setActive={jest.fn()} />);
    expect(screen.getByRole("item")).toBeInTheDocument();
  });
  it("should render with passed item", () => {
    renderWithContext(<DropdownItem item={"Минск"} setActive={jest.fn()} />);
    expect(screen.getByText("Минск")).toBeInTheDocument();
  });
});
