type Product = {name: string, price: number}

export default class LegacyShoppingCart {
  private readonly _products: Product[] = [];
  private cartStatus: "open" | "closed" = "open";

  addProduct(product: Product): void {
    this._products.push(product);
  }

  removeProduct(index: number): void {
    this._products.splice(index, 1);
  }

  get products(): Readonly<Product>[] {
    return this._products;
  }

  get status(): "open" | "closed" {
    return this.cartStatus;
  }

  total(): number {
    let total = 0;
    for (const product of this.products) {
      total += +product.price.toFixed(2);
    }
    return total;
  }

  checkout(): void {
    if(this._products.length === 0) {
      console.log("Empty cart.");
      return;
    }
    this.cartStatus = "closed";
    this.sendMessage("Order received");
    this.saveOrder();
    this.clearCart();
  }

  sendMessage(msg: string) {
    console.log(msg);
  }

  saveOrder() {
    console.log("Order has been saved.");
  }

  clearCart() {
    this._products.length = 0;
    console.log("Empting shopping cart");
  }
}

const cart = new LegacyShoppingCart();
cart.addProduct({name: "Teste", price: 10});
cart.addProduct({name: "Teste", price: 10});
console.log(cart.products, cart.total());
cart.checkout();
console.log(`Cart status: ${cart.status}`)
