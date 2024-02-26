"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractSelling = void 0;
class AbstractSelling {
    product;
    count;
    constructor(product, quantity) {
        this.product = product;
        this.count = quantity;
    }
    get productInfo() {
        return this.product;
    }
    set newProduct(newProduct) {
        this.product = newProduct;
    }
    get countInfo() {
        return this.count;
    }
    set quantityProduct(quantity) {
        this.count = quantity;
    }
    compare(product) {
        const a = product.getPrice();
        const b = this.getPrice();
        if (a > b) {
            return 1;
        }
        else if (b > a) {
            return -1;
        }
        else {
            return 0;
        }
    }
}
exports.AbstractSelling = AbstractSelling;
