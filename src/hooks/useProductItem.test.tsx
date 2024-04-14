import { renderHook, act } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import { useProductItem } from "./useProductItem";
import { ActiveOrderContext } from "../context/activeOrderContext";
import {
  getActiveOrderMock,
  getProductsMock,
  productItem,
} from "../utils/testUtils";
import { SelectChangeEvent } from "@mui/material";
import { FormEvent } from "react";

const value = { activeOrder: undefined, setActiveOrder: () => {} };

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

describe("useProductItem", () => {
  it("return correct values", async () => {
    const { result } = renderHook(() => useProductItem({ item: productItem }), {
      wrapper,
    });
    expect(result.current.variant).toEqual(productItem.variants[0]);
  });

  it("return correct variant after onChangeVariant", async () => {
    const { result } = renderHook(() => useProductItem({ item: productItem }), {
      wrapper,
    });
    expect(result.current.variant).toEqual(productItem.variants[0]);

    act(() =>
      result.current.onChangeVariant({
        target: { value: "2" },
      } as SelectChangeEvent)
    );

    expect(result.current.variant).toEqual(productItem.variants[1]);
  });
});
