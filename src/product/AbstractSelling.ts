import { Product } from "./Product";

export abstract class AbstractSelling {
  product: Product;
  count: number;
  constructor(product: Product, quantity: number) {
    this.product = product;
    this.count = quantity;
  }

  get productInfo() {
    return this.product;
  }

  set newProduct(newProduct: Product) {
    this.product = newProduct;
  }

  get countInfo() {
    return this.count;
  }

  set quantityProduct(quantity: number) {
    this.count = quantity;
  }

  abstract getPrice(): number;

  compare(product: AbstractSelling): number {
    const a: number = product.getPrice();
    const b: number = this.getPrice();

    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
  }
}