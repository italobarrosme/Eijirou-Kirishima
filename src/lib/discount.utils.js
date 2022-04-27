import Dinero from 'dinero.js';

Dinero.defaultCurrency = 'BRL';
Dinero.defaultPrecision = 2;

const calculaterPercentageDiscount = ({ condition, quantity }, amount) => {
  if (condition?.percentage && quantity > condition.minimum) {
    return amount.percentage(condition.percentage);
  }

  return Dinero({ amount: 0 });
};

const calculaterQuantityDiscount = ({ condition, quantity }, amount) => {
  const isEven = quantity % 2 === 0;

  if (condition?.quantity && quantity > condition.quantity) {
    return amount.percentage(isEven ? 50 : 40);
  }

  return Dinero({ amount: 0 });
};

export const calculaterDiscount = (amount, quantity, condition) => {
  const list = Array.isArray(condition) ? condition : [condition];

  const [higherDiscount] = list
    .map(cond => {
      if (cond.percentage) {
        return calculaterPercentageDiscount(
          { condition: cond, quantity },
          amount,
        ).getAmount();
      } else if (cond.quantity) {
        return calculaterQuantityDiscount(
          { condition: cond, quantity },
          amount,
        ).getAmount();
      }
    })
    .sort((a, b) => b - a);

  return Dinero({ amount: higherDiscount });
};
