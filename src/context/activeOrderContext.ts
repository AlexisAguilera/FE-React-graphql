import { createContext } from "react";
import { OrderType } from "../types";

export interface ActiveOrderContextProps {
  activeOrder: OrderType | undefined;
  setActiveOrder: React.Dispatch<React.SetStateAction<OrderType | undefined>>;
}

export const ActiveOrderContext = createContext<ActiveOrderContextProps>({
  activeOrder: undefined,
  setActiveOrder: () => {},
});
