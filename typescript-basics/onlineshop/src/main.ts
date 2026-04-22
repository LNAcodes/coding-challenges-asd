import { isInStock } from "./products.js";
import { orderTotal, formatOrder } from "./orders.js";
import type { Product, Category } from "./products.js";
import type { Customer, Order } from "./orders.js";

const treats: Category = {
  name: "Treats",
  description: "Delicious snacks for cats",
};

const tunaCandies: Product = {
  id: "P001",
  name: "Tuna Candies",
  priceEuros: 4.99,
  stockcount: 20,
  category: treats,
};

const salmonDrops: Product = {
  id: "P002",
  name: "Salmon Drops",
  priceEuros: 3.49,
  stockcount: 0,
  category: treats,
};

const customer: Customer = {
  id: "C001",
  name: "Milo the Cat",
  email: "milo@catcandy.com",
};

const order: Order = {
  customer: customer,
  lineItems: [
    { product: tunaCandies, quantity: 3 },
    { product: salmonDrops, quantity: 2 },
  ],
  status: "pending",
};

console.log(formatOrder(order));
console.log(`Total: ${orderTotal(order)}€`);
console.log(`Tuna Candies in stock: ${isInStock(tunaCandies)}`);
console.log(`Salmon Drops in stock: ${isInStock(salmonDrops)}`);
