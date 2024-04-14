import { renderHook } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import { useActiveOrder } from "./useActiveOrder";
import { ActiveOrderContext } from "../context/activeOrderContext";
import {
  getActiveOrderMock,
  getProductsMock,
  activeOrder,
} from "../utils/testUtils";

const value = { activeOrder, setActiveOrder: () => {} };

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <MockedProvider
    mocks={[getActiveOrderMock, getProductsMock]}
    addTypename={false}
  >
    <ActiveOrderContext.Provider value={value}>
      {children}
    </ActiveOrderContext.Provider>
  </MockedProvider>
);

describe("useActiveOrder", () => {
  it.only("return the correct activeOrder", async () => {
    const { result } = renderHook(() => useActiveOrder(), {
      wrapper,
    });
    expect(result.current.activeOrder).toEqual(activeOrder);
  });
});
