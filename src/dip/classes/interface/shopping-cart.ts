import { Product } from '../product';

export interface ShoppingCartInterface {
  products(): Readonly<Product>[];

  addProduct(product: Product): void;

  removeProduct(index: number): void;

  total(): number;

  totalWithDiscount(): number;

  isEmpty(): boolean;

  clearCart(): void;
}
