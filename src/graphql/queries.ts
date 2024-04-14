import { gql } from "@apollo/client";

import { ORDER_FRAGMENT } from "./fragments";

export const GET_PRODUCTS = gql`
  query Products($options: ProductListOptions) {
    products(options: $options) {
      items {
        id
        name
        description
        assets {
          id
          preview
        }
        variants {
          id
          name
          currencyCode
          price
          priceWithTax
        }
      }
    }
  }
`;

export const GET_ACTIVE_ORDER = gql`
  query GetActiveOrder {
    activeOrder {
      ...UpdatedOrder
    }
  }
  ${ORDER_FRAGMENT}
`;
