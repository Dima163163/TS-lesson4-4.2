"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    get priceProduct() {
        return this.price;
    }
    set priceProduct(price) {
        this.price = price;
    }
    get nameProduct() {
        return this.name;
    }
    set nameProduct(name) {
        this.name = name;
    }
}
exports.Product = Product;
