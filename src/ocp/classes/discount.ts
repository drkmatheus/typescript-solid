export abstract class Discount {
  protected discount = 0;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class NoDiscount extends Discount {}

export class TenPercent extends Discount {
  protected override readonly discount = 0.1;
}
