import { renderWithContext } from "../../test-utils";
import { screen, waitFor } from "@testing-library/react";
import DropdownItem from "../DropdownItem";
import userEvent from "@testing-library/user-event";

describe("DropDown component", () => {
  it("should render", () => {
    renderWithContext(<DropdownItem item={"Минск"} setActive={jest.fn()} />);
    expect(screen.getByRole("item")).toBeInTheDocument();
  });
  it("should render with passed item", () => {
    renderWithContext(<DropdownItem item={"Минск"} setActive={jest.fn()} />);
    expect(screen.getByText("Минск")).toBeInTheDocument();
  });
  it("should close dropdown when clicked", async () => {
    const setActive = jest.fn();
    renderWithContext(<DropdownItem item={"Минск"} setActive={setActive} />);
    const button = screen.getByRole("item");
    userEvent.click(button);
    await waitFor(() => {
      expect(setActive).toBeCalledTimes(1);
    });
  });
});
