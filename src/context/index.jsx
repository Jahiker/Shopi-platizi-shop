import { createContext, useState } from 'react'
import PropType from 'prop-types'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  return (
    <CartContext.Provider value={{ count, setCount }}>
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropType.node
}
