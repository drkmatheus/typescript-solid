import Order from './classes/order';
import ShoppingCart from './classes/shopping-cart';
import SendMessage from './services/send-message';
import { Persistence } from './services/persistency';
import { Product } from './classes/product';
import { TenPercent } from './classes/discount';

const tenDiscount = new TenPercent();
const cart = new ShoppingCart(tenDiscount);
const message = new SendMessage();
const persistence = new Persistence();
const order = new Order(cart, message, persistence);

cart.addProduct(new Product('Smartphone', 1000));
cart.addProduct(new Product('PC', 11000));
console.log(cart.products, cart.total());
console.log(cart.products, cart.totalWithDiscount());
order.checkout();
console.log(`Order status: ${order.status}`);
