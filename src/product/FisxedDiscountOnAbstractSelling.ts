import { AbstractSelling } from './AbstractSelling';
import { Product } from './Product';

export class FisxedDiscountOnAbstractSelling extends AbstractSelling {
  totalPrice: number;

  constructor(product: Product, count: number) {
    super(product, count);
    this.totalPrice = this.getPrice();
  }

  getPrice(): number {
    return Number(((this.product.priceProduct - 10) * this.count).toFixed(2))
  }
}