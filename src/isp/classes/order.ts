import { OrderStatus } from './interface/order-status';
import ShoppingCart from './shopping-cart';
import SendMessage from '../services/send-message';
import { Persistence } from '../services/persistency';

export default class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly sendMessage: SendMessage,
    private readonly persistency: Persistence,
  ) {}

  get status(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Empty cart.');
      return;
    }
    this._orderStatus = 'closed';
    this.sendMessage.sendMessage('Message sent: Order received');
    this.persistency.saveOrder();
    this.cart.clearCart();
  }
}
