import { render, screen } from "@testing-library/react";
import Error from "./Error";

describe("Error component", () => {
  it("renders correctly", () => {
    render(<Error data-testId="error" />);
    expect(screen.queryByTestId("error")).toBeDefined();
  });
});
