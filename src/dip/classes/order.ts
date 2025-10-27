import { OrderStatus } from './interface/order-status';
import { CustomerInfo } from './interface/customer';
import { ShoppingCartInterface } from './interface/shopping-cart';
import { SendMessageInterface } from '../services/interfaces/send-message';
import { PersistenceInterface } from '../services/interfaces/persistency';

export default class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCartInterface,
    private readonly sendMessage: SendMessageInterface,
    private readonly persistency: PersistenceInterface,
    private readonly customer: CustomerInfo,
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
    this.sendMessage.sendMessage();
    this.persistency.saveOrder();
    this.cart.clearCart();
    console.log('Client:', this.customer.getName(), this.customer.getIDN());
  }
}
