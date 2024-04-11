import { gql } from '@apollo/client';

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
          sku
          stockLevel
          currencyCode
          price
          priceWithTax
          featuredAsset {
            id
            preview
          }
          assets {
            id
            preview
          }
        }
      }
    }
  }
`;
