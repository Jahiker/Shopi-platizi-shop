/**
 * This functions calculate total price of a new order
 * @param {Array} products cartProducts: Array of Object
 * @returns{Number} Total price
 */
export const totalPrice = (products) => {
  const initialValue = 0

  const totalSum = products.reduce((sum, product) => sum + product.price, initialValue)

  const total = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(totalSum)

  return total
}
