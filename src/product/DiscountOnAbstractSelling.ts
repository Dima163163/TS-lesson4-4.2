import { AbstractSelling } from './AbstractSelling';
import { Product } from './Product';

export class DiscountOnAbstractSelling extends AbstractSelling {
  isDiscount: boolean;
  totalPrice: number;
  constructor(product: Product, count: number, countForDiscount: number) {
    super(product, count);
    this.isDiscount = this.count >= countForDiscount;
    this.totalPrice = this.getPrice();
  }

  getPrice(): number {
    if (this.isDiscount) {
      return Number((this.product.priceProduct * this.count * 0.9).toFixed(2));
    } else {
      return Number((this.product.priceProduct * this.count).toFixed(2));
    }
  }
}