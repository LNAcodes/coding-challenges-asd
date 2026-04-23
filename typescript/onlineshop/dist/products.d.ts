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
export declare function isInStock(product: Product): boolean;
//# sourceMappingURL=products.d.ts.map