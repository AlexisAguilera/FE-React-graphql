import { useState, useCallback } from "react";

export default function useStateWithStorage({
  key,
  defaultValue,
}: {
  key: string;
  defaultValue?: unknown;
}) {
  const [value, setValue] = useState(() => {
    const localData = localStorage.getItem(key);
    return localData ? JSON.parse(localData) : defaultValue;
  });
  //if we want to keep the same API than useState, we just need this function
  const update = useCallback(
    (newValue: unknown) => {
      setValue(newValue);

      if (typeof newValue === "undefined") {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    },
    [key]
  );

  const remove = useCallback(() => {
    setValue(undefined);
    localStorage.removeItem(key);
  }, [key]);

  return { value, update, remove };
}
