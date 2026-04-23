export function orderTotal(order) {
    return order.lineItems.reduce((total, lineItem) => {
        return total + lineItem.quantity * lineItem.product.priceEuros;
    }, 0);
}
export function formatOrder(order) {
    const items = order.lineItems
        .map((lineItem) => `${lineItem.quantity}x ${lineItem.product.name}`)
        .join(",");
    return `Order for ${order.customer.name} - Status: ${order.status} - ${items} - Total: ${orderTotal(order)}€`;
}
//# sourceMappingURL=orders.js.map