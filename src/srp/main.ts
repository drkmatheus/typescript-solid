import Order from './entity/order';
import ShoppingCart from './entity/shopping-cart';
import SendMessage from './services/send-message';
import { Persistence } from './services/persistency';
import { Product } from './entity/product';

const cart = new ShoppingCart();
const message = new SendMessage();
const persistence = new Persistence();
const order = new Order(cart, message, persistence);

cart.addProduct(new Product('Smartphone', 1000));
cart.addProduct(new Product('PC', 11000));
console.log(cart.products, cart.total());
order.checkout();
console.log(`Order status: ${order.status}`);
