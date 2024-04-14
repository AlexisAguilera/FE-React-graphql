import { MockedResponse } from "@apollo/client/testing";

import { GET_PRODUCTS, GET_ACTIVE_ORDER } from "../graphql/queries";
import { ADD_ITEM_TO_ORDER } from "../graphql/mutations";

export const productItem = {
  id: "1",
  name: "Laptop",
  description:
    "Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.",
  assets: [
    {
      id: "1",
      preview:
        "https://demo.vendure.io/assets/preview/71/derick-david-409858-unsplash__preview.jpg",
      __typename: "Asset",
    },
  ],
  variants: [
    {
      id: "1",
      name: "Laptop 13 inch 8GB",
      currencyCode: "USD",
      price: 129900,
      priceWithTax: 155880,
      __typename: "ProductVariant",
    },
    {
      id: "2",
      name: "Laptop 15 inch 8GB",
      currencyCode: "USD",
      price: 139900,
      priceWithTax: 167880,
      __typename: "ProductVariant",
    },
    {
      id: "3",
      name: "Laptop 13 inch 16GB",
      currencyCode: "USD",
      price: 219900,
      priceWithTax: 263880,
      __typename: "ProductVariant",
    },
    {
      id: "4",
      name: "Laptop 15 inch 16GB",
      currencyCode: "USD",
      price: 229900,
      priceWithTax: 275880,
      __typename: "ProductVariant",
    },
  ],
  __typename: "Product",
};

export const activeOrder = {
  id: "63",
  code: "97LGC2KUE3T28U3V",
  state: "AddingItems",
  totalQuantity: 1,
  totalWithTax: 155880,
  currencyCode: "USD",
  lines: [
    {
      id: "84",
      unitPriceWithTax: 155880,
      quantity: 1,
      linePriceWithTax: 155880,
      productVariant: {
        id: "1",
        name: "Laptop 13 inch 8GB",
      },
    },
  ],
};

export const getProductsMock: MockedResponse = {
  request: {
    query: GET_PRODUCTS,
    variables: {
      options: {
        take: 45,
      },
    },
  },
  result: {
    data: {
      products: [productItem, { ...productItem, id: 2, name: "product2" }],
    },
  },
};

export const getActiveOrderMock: MockedResponse = {
  request: { query: GET_ACTIVE_ORDER },
  result: {
    data: {
      activeOrder,
    },
  },
};

export const addItemOrderMock: MockedResponse = {
  request: {
    query: ADD_ITEM_TO_ORDER,
    variables: {
      variantId: "1",
      quantity: 1,
    },
  },
  result: {
    data: {
      addItemToOrder: {
        id: "65",
        code: "TQRB7U75B97KFXBR",
        state: "AddingItems",
        totalQuantity: 1,
        totalWithTax: 155880,
        currencyCode: "USD",
        lines: [
          {
            id: "87",
            unitPriceWithTax: 155880,
            quantity: 1,
            linePriceWithTax: 155880,
            productVariant: {
              id: "1",
              name: "Laptop 13 inch 8GB",
            },
          },
        ],
      },
    },
  },
};

export const mockLocalStorage = () => {
  const setItemMock = jest.fn();
  const getItemMock = jest.fn();
  const removeItemMock = jest.fn();

  beforeEach(() => {
    Storage.prototype.setItem = setItemMock;
    Storage.prototype.getItem = getItemMock;
    Storage.prototype.removeItem = removeItemMock;
  });

  afterEach(() => {
    setItemMock.mockRestore();
    getItemMock.mockRestore();
    removeItemMock.mockRestore();
  });

  return { setItemMock, getItemMock, removeItemMock };
};
