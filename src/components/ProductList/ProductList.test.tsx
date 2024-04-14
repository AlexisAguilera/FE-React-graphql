import { waitFor, render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import { ProductList } from "./ProductList";
import { ActiveOrderContext } from "../../context/activeOrderContext";
import { getActiveOrderMock, getProductsMock } from "../../utils/testUtils";

const value = { activeOrder: undefined, setActiveOrder: () => {} };

const TestComponent = (
  <MockedProvider
    mocks={[getActiveOrderMock, getProductsMock]}
    addTypename={false}
  >
    <ActiveOrderContext.Provider value={value}>
      <ProductList />
    </ActiveOrderContext.Provider>
  </MockedProvider>
);

describe("ProductList", () => {
  it("renders correctly", async () => {
    render(TestComponent);

    //loading
    expect(screen.findByRole("progressbar")).toBeDefined();
    await waitFor(() => {
      //grid
      const grid = screen.findByRole("grid");
      expect(grid).toBeDefined();
    });
  });

  it("render grid items", async () => {
    render(TestComponent);
    await waitFor(() => {
      const grid = screen.findByRole("grid");
      expect(grid).toBeDefined();
      const item = screen.findByText("Tablet");
      const item2 = screen.findByText("product2");
      expect(item).toBeDefined();
      expect(item2).toBeDefined();
    });
  });
});
