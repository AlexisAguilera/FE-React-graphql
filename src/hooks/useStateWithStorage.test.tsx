import { renderHook, act } from "@testing-library/react";

import useStateWithStorage from "./useStateWithStorage";
import { mockLocalStorage } from "../utils/testUtils";

const { getItemMock, setItemMock, removeItemMock } = mockLocalStorage();

describe("useStateWithStorage", () => {
  it("default value is correct and getItem is called", () => {
    const { result } = renderHook(useStateWithStorage, {
      initialProps: { key: "newVal", defaultValue: "test" },
    });

    expect(result.current.value).toEqual("test");
    expect(getItemMock).toBeCalledWith("newVal");
  });

  it("value is updated", () => {
    const { result } = renderHook(useStateWithStorage, {
      initialProps: { key: "newVal", defaultValue: "test" },
    });

    expect(result.current.value).toEqual("test");
    expect(getItemMock).toBeCalledWith("newVal");

    act(() => {
      result.current.update("updated");
    });

    expect(result.current.value).toEqual("updated");
    expect(setItemMock).toBeCalledWith("newVal", '"updated"');
  });

  it("value is removed", () => {
    const { result } = renderHook(useStateWithStorage, {
      initialProps: { key: "newVal", defaultValue: "test" },
    });

    expect(result.current.value).toEqual("test");
    expect(getItemMock).toBeCalledWith("newVal");

    act(() => {
      result.current.remove();
    });

    expect(result.current.value).toEqual(undefined);
    expect(removeItemMock).toBeCalledWith("newVal");
  });
});
