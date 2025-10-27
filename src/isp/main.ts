import Order from './classes/order';
import ShoppingCart from './classes/shopping-cart';
import SendMessage from './services/send-message';
import { Persistence } from './services/persistency';
import { Product } from './classes/product';
import { TenPercent } from './classes/discount';
import { PFCustomer } from './classes/customer';

const tenDiscount = new TenPercent();
const cart = new ShoppingCart(tenDiscount);
const message = new SendMessage();
const persistence = new Persistence();
const customer = new PFCustomer('Marilan', 'Silva', '111111111111');
const order = new Order(cart, message, persistence, customer);

cart.addProduct(new Product('Smartphone', 1000));
cart.addProduct(new Product('PC', 11000));
console.log(cart.products, cart.total());
console.log(cart.products, cart.totalWithDiscount());
order.checkout();
console.log(`Order status: ${order.status}`);
