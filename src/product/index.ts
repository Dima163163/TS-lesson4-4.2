import {AbstractSelling} from './AbstractSelling';
import { DiscountOnAbstractSelling } from './DiscountOnAbstractSelling';
import { FisxedDiscountOnAbstractSelling } from './FisxedDiscountOnAbstractSelling';
import { Product } from './Product';

let products: AbstractSelling[] = [];

const iMac = new Product('iMac', 200000);
const MacBook = new Product('MacBook14', 170000);
const iPhone = new Product('iPhone15', 120000);
const iPad = new Product('iPad', 70000);


const discountIMac = new DiscountOnAbstractSelling(iMac, 14, 6);
const discountMacBook =  new DiscountOnAbstractSelling(MacBook, 8, 6);
const discountIPhone =  new DiscountOnAbstractSelling(iPhone, 6, 8);
const discountIPad = new DiscountOnAbstractSelling(iPad, 4, 2);

const tv = new Product('Телевизор', 30000);
const coffeeMachine = new Product('Кофемашина', 40000);
const fridge = new Product('Холодильник', 30000);
const kettle = new Product('Чайник', 5000);

const fixedDiscountTv = new FisxedDiscountOnAbstractSelling(tv, 2);
const fixedDiscountCoffeeMachine = new FisxedDiscountOnAbstractSelling(coffeeMachine, 5);
const fixedDiscountFridge = new FisxedDiscountOnAbstractSelling(fridge, 8);
const fixedDiscountKettle = new FisxedDiscountOnAbstractSelling(kettle, 4);

products.push(
discountIMac,
discountMacBook,
discountIPhone,
discountIPad,
fixedDiscountTv,
fixedDiscountCoffeeMachine,
fixedDiscountFridge,
fixedDiscountKettle,
);

console.log('PRODUCTS без сортировки', products);
products.sort((a, b) => a.compare(b));
console.log('PRODUCTS после сортировки', products);
