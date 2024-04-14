import { useEffect, useContext } from "react";
import { useQuery } from "@apollo/client";

import { GET_ACTIVE_ORDER } from "../graphql/queries";
import { ActiveOrderContext } from "../context/activeOrderContext";

export const useActiveOrder = () => {
  const { setActiveOrder, activeOrder } = useContext(ActiveOrderContext);
  const { data: orderData } = useQuery(GET_ACTIVE_ORDER);

  useEffect(() => {
    if (orderData?.activeOrder && !activeOrder) {
      setActiveOrder(orderData.activeOrder);
    }
  }, [orderData, activeOrder, setActiveOrder]);

  return {
    activeOrder,
  };
};
