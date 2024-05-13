import Decimal from 'decimal.js-light'

export const round = (value: number, decimals = 2) => {
  return new Decimal(value).toFixed(decimals)
}
