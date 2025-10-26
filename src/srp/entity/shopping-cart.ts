import { Product } from './product';

export default class ShoppingCart {
  private readonly _products: Product[] = [];

  addProduct(product: Product): void {
    this._products.push(product);
  }

  removeProduct(index: number): void {
    this._products.splice(index, 1);
  }

  get products(): Readonly<Product>[] {
    return this._products;
  }

  total(): number {
    let total = 0;
    for (const product of this.products) {
      total += +product.price.toFixed(2);
    }
    return total;
  }

  isEmpty(): boolean {
    return this._products.length === 0;
  }

  clearCart() {
    this._products.length = 0;
    console.log('Empting shopping cart');
  }
}
