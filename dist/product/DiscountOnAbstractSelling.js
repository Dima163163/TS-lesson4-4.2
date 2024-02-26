"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountOnAbstractSelling = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
class DiscountOnAbstractSelling extends AbstractSelling_1.AbstractSelling {
    isDiscount;
    totalPrice;
    constructor(product, count, countForDiscount) {
        super(product, count);
        this.isDiscount = this.count >= countForDiscount;
        this.totalPrice = this.getPrice();
    }
    getPrice() {
        if (this.isDiscount) {
            return Number((this.product.priceProduct * this.count * 0.9).toFixed(2));
        }
        else {
            return Number((this.product.priceProduct * this.count).toFixed(2));
        }
    }
}
exports.DiscountOnAbstractSelling = DiscountOnAbstractSelling;
