import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import { Header } from "./Header";
import { ActiveOrderContext } from "../../context/activeOrderContext";
import { getActiveOrderMock, getProductsMock } from "../../utils/testUtils";

const value = { activeOrder: undefined, setActiveOrder: () => {} };

const TestHeader = (
  <MockedProvider
    mocks={[getActiveOrderMock, getProductsMock]}
    addTypename={false}
  >
    <ActiveOrderContext.Provider value={value}>
      <Header />
    </ActiveOrderContext.Provider>
  </MockedProvider>
);

describe("Header", () => {
  it("renders correctly", () => {
    const { container } = render(TestHeader);
    const logo = screen.findAllByAltText("logo");
    const cart = screen.findByTestId("ShoppingCartOutlinedIcon");

    expect(container.querySelector("header")).toBeDefined();
    expect(logo).toBeDefined();
    expect(cart).toBeDefined();
  });

  it("renders chart info", async () => {
    render(TestHeader);
    await waitFor(() => {
      expect(screen.findByText("Items: 1"));
      expect(screen.findByText("Subtotal: USD 1,558.80"));
    });
  });
});
