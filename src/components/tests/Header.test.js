import { renderWithContext } from "../../test-utils";
import { screen, waitFor } from "@testing-library/react";
import Header from "../Header";
import userEvent from "@testing-library/user-event";

describe("DropDown component", () => {
  it("should render", () => {
    renderWithContext(<Header />);
    expect(screen.getByRole("header")).toBeInTheDocument();
  });
  it("should show dropdown by click", async () => {
    renderWithContext(<Header />);
    const button = screen.getByRole("select");
    userEvent.click(button);
    await waitFor(() => {
      expect(screen.getByRole("dropdown")).toBeInTheDocument();
    });
  });
});
