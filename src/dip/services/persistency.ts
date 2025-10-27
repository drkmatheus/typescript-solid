import { PersistenceInterface } from './interfaces/persistency';

export class Persistence implements PersistenceInterface {
  saveOrder() {
    console.log('Order has been saved.');
  }
}
