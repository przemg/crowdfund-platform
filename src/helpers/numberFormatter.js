export const numberFormatter = (number, options = {}) =>
  new Intl.NumberFormat('en-US', options).format(number);

export const priceFormatter = (price) =>
  numberFormatter(price, {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });
