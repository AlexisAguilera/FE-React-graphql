export interface ProductItemType {
  id: string;
  name: string;
  description: string;
  assets: Array<{ id: string; preview: string }>;
  variants: ProductVariant[];
}

export interface ProductVariant {
  id: string;
  name: string;
  currencyCode: string;
  price: Money;
  priceWithTax: number;
}

export interface OrderType {
  id: string;
  totalQuantity: number;
  totalWithTax: number;
  currencyCode: string;
  lines: Array<{
    id: string;
    unitPriceWithTax: number;
    quantity: number;
    linePriceWithTax: number;
    productVariant: ProductVariant;
  }>;
}
