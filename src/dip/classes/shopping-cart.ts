import { Product } from './product';
import { Discount } from './discount';
import { ShoppingCartInterface } from './interface/shopping-cart';

export default class ShoppingCart implements ShoppingCartInterface {
  private readonly _products: Product[] = [];

  constructor(private readonly discount: Discount) {}

  addProduct(product: Product): void {
    this._products.push(product);
  }

  removeProduct(index: number): void {
    this._products.splice(index, 1);
  }

  products(): Readonly<Product>[] {
    return this._products;
  }

  total(): number {
    return +this._products.reduce((total, obj) => total + obj.price, 0);
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  isEmpty(): boolean {
    return this._products.length === 0;
  }

  clearCart() {
    this._products.length = 0;
    console.log('Empting shopping cart');
  }
}
