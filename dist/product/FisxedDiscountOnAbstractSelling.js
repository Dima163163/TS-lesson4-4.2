"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FisxedDiscountOnAbstractSelling = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
class FisxedDiscountOnAbstractSelling extends AbstractSelling_1.AbstractSelling {
    totalPrice;
    constructor(product, count) {
        super(product, count);
        this.totalPrice = this.getPrice();
    }
    getPrice() {
        return Number(((this.product.priceProduct - 10) * this.count).toFixed(2));
    }
}
exports.FisxedDiscountOnAbstractSelling = FisxedDiscountOnAbstractSelling;
