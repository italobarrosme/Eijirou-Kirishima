import find from 'lodash/find';
import remove from 'lodash/remove';
import Dinero from 'dinero.js';
import { calculaterDiscount } from './discount.utils';

Dinero.defaultCurrency = 'BRL';
Dinero.defaultPrecision = 2;

export default class Cart {
  items = [];

  add(item) {
    const itemToFind = { product: item.product };
    if (find(this.items, itemToFind)) {
      remove(this.items, itemToFind);
    }

    this.items.push(item);
  }

  remove(item) {
    const itemToFind = { product: item };
    remove(this.items, itemToFind);
  }

  getTotal() {
    return this.items.reduce((acc, { product, quantity, condition }) => {
      const amount = Dinero({ amount: product.price * quantity });

      let discount = Dinero({ amount: 0 });

      if (condition) {
        discount = calculaterDiscount(amount, quantity, condition);
      }

      return acc.add(amount).subtract(discount);
    }, Dinero({ amount: 0 }));
  }

  summary() {
    const total = this.getTotal();
    const items = this.items;
    const formatted = total
      .toFormat('$0,0.00')
      .toString()
      .replace('.', ',')
      .replace(',', '.');

    return {
      total,
      items,
      formatted,
    };
  }

  checkout() {
    const { total, items } = this.summary();

    this.items = [];

    return {
      total,
      items,
    };
  }
}
