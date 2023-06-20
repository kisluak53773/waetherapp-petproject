import { renderWithContext } from "../../test-utils";
import { screen } from "@testing-library/react";
import Dropdown from "../Dropdown";

describe("DropDown component", () => {
  it("should render", () => {
    renderWithContext(
      <Dropdown city={""} position={{ right: 10, bottom: 10 }} />
    );
    expect(screen.getByRole("dropdown")).toBeInTheDocument();
  });
});
