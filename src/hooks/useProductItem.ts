import { useState, useContext, FormEvent } from "react";
import { useMutation } from "@apollo/client";
import { SelectChangeEvent } from "@mui/material/Select";

import { ActiveOrderContext } from "../context/activeOrderContext";
import { ProductItemType, ProductVariant } from "../types";
import { ADD_ITEM_TO_ORDER } from "../graphql/mutations";

interface UseProductItemProps {
  item: ProductItemType;
}

export const useProductItem = ({ item }: UseProductItemProps) => {
  const [variant, setVariant] = useState<ProductVariant | null>(
    item?.variants?.[0]
  );
  const [addItemToOrder] = useMutation(ADD_ITEM_TO_ORDER);

  const { setActiveOrder } = useContext(ActiveOrderContext);

  const onChangeVariant = (e: SelectChangeEvent) => {
    const newVariant =
      item.variants.find((v) => v.id === e.target.value) || null;

    setVariant(newVariant);
  };

  const addItem = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const quantity = 1;
    const variables = {
      variantId: variant?.id,
      quantity,
    };
    const result = await addItemToOrder({
      variables,
    });

    if (result.data.addItemToOrder.__typename !== "Order") {
      // An error occurred!
      window.alert(result.data.addItemToOrder.message);
    } else {
      setActiveOrder(result.data.addItemToOrder);
    }
  };

  return {
    variant,
    onChangeVariant,
    addItem,
  };
};
