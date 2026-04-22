import { isInStock } from "./products.js";
import { orderTotal, formatOrder } from "./orders.js";
const treats = {
    name: "Treats",
    description: "Delicious snacks for cats",
};
const tunaCandies = {
    id: "P001",
    name: "Tuna Candies",
    priceEuros: 4.99,
    stockcount: 20,
    category: treats,
};
const salmonDrops = {
    id: "P002",
    name: "Salmon Drops",
    priceEuros: 3.49,
    stockcount: 0,
    category: treats,
};
const customer = {
    id: "C001",
    name: "Milo the Cat",
    email: "milo@catcandy.com",
};
const order = {
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
//# sourceMappingURL=main.js.map