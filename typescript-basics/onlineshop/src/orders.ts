// Customer, order, line item Interface, functions: orderTotal and formatOrder
/* A customer has an id, name, and email.
An order links a customer to a list of line items. Each line item references a product and a quantity. Orders carry a status of either "pending", "confirmed", or "shipped".
orderTotal(order: Order): number — the total price across all line items
formatOrder(order: Order): string — a readable summary of the order
*/
import type { Product } from "./products.js";

export interface Customer {
  id: string;
  name: string;
  email: string;
}

export interface Order {
  customer: Customer;
  lineItems: LineItem[];
  status: "pending" | "confirmed" | "shipped";
}

export interface LineItem {
  product: Product;
  quantity: number;
}

export function orderTotal(order: Order): number {
  return order.lineItems.reduce((total, lineItem) => {
    return total + lineItem.quantity * lineItem.product.priceEuros;
  }, 0);
}

export function formatOrder(order: Order): string {
  const items = order.lineItems
    .map((lineItem) => `${lineItem.quantity}x ${lineItem.product.name}`)
    .join(",");

  return `Order for ${order.customer.name} - Status: ${order.status} - ${items} - Total: ${orderTotal(order)}€`;
}
