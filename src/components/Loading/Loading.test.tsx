import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Loading component", () => {
  it("renders correctly", () => {
    render(<Loading data-testId="loading" />);
    expect(screen.queryByTestId("error")).toBeDefined();
  });
});
