export class Product{
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  get priceProduct() {
    return this.price;
  }

  set priceProduct(price: number) {
    this.price = price;
  }

  get nameProduct() {
    return this.name;
  }

  set nameProduct(name: string) {
    this.name = name;
  }
}