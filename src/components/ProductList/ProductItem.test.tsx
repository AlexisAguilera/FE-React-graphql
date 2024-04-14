import { act, fireEvent, render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import ProductItem from "./ProductItem";
import { ActiveOrderContext } from "../../context/activeOrderContext";
import {
  getActiveOrderMock,
  getProductsMock,
  productItem,
} from "../../utils/testUtils";

const value = { activeOrder: undefined, setActiveOrder: () => {} };

const TestComponent = (
  <MockedProvider
    mocks={[getActiveOrderMock, getProductsMock]}
    addTypename={false}
  >
    <ActiveOrderContext.Provider value={value}>
      <ProductItem item={productItem} />
    </ActiveOrderContext.Provider>
  </MockedProvider>
);

describe("ProductItem", () => {
  it("renders correctly", () => {
    const { container } = render(TestComponent);
    const title = screen.findByText("Laptop");
    const img = container.querySelector("img");
    const button = screen.getByText("Add to cart").closest("button");
    const select = container.querySelector("input");

    expect(title).toBeDefined();
    expect(img).toBeDefined();
    expect(button).toBeDefined();
    expect(select).toHaveProperty("value", "1");
  });

  it("select options should have the correct data-value atribute", () => {
    render(TestComponent);
    const select = screen.getByRole("combobox");
    act(() => {
      select.focus();
    });

    fireEvent.keyDown(select, { key: "ArrowDown" });

    const options = screen.getAllByRole("option");

    expect(options[0]).toHaveAttribute("data-value", "1");
    expect(options[1]).toHaveAttribute("data-value", "2");
    expect(options[2]).toHaveAttribute("data-value", "3");
    expect(options[3]).toHaveAttribute("data-value", "4");
  });
});
