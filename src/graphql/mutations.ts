import { gql } from "@apollo/client";
import { ORDER_FRAGMENT } from "./fragments";

export const ADD_ITEM_TO_ORDER = gql`
  mutation AddItemToOrder($variantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $variantId, quantity: $quantity) {
      ...UpdatedOrder
      ... on ErrorResult {
        __typename
        errorCode
        message
      }
      ... on InsufficientStockError {
        __typename
        quantityAvailable
        order {
          ...UpdatedOrder
        }
      }
    }
  }
  ${ORDER_FRAGMENT}
`;
