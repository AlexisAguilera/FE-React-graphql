import { gql } from "@apollo/client";

export const ORDER_FRAGMENT = gql`
  fragment UpdatedOrder on Order {
    __typename
    id
    code
    state
    totalQuantity
    totalWithTax
    currencyCode
    lines {
      __typename
      id
      unitPriceWithTax
      quantity
      linePriceWithTax
      productVariant {
        __typename
        id
        name
      }
    }
  }
`;
