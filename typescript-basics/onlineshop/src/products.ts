// Product, Category Interfaces, function: isInStock
/* A product has a name, a price in euros, and a stock count. Its id must never be reassigned after creation.
Products belong to a category. A category has a name and an optional description.

isInStock(product: Product): boolean — whether the product has stock available
*/
export interface Category {
  name: string;
  description?: string;
}

export interface Product {
  readonly id: string;
  name: string;
  priceEuros: number;
  stockcount: number;
  category: Category;
}

export function isInStock(product: Product): boolean {
  return product.stockcount > 0;
}
