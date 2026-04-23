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
export declare function orderTotal(order: Order): number;
export declare function formatOrder(order: Order): string;
//# sourceMappingURL=orders.d.ts.map