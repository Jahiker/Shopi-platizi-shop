import { createContext, useState } from 'react'
import PropType from 'prop-types'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  // Shopping Cart
  const [count, setCount] = useState(0)

  // Product Detail
  const [productDetailOpen, setProductDetailOpen] = useState(false)
  const [productToShow, setProductToShow] = useState(null)

  const handleOpenDetail = () => setProductDetailOpen(true)
  const handleCloseDetail = () => setProductDetailOpen(false)

  return (
    <CartContext.Provider
      value={{
        count,
        setCount,
        productDetailOpen,
        handleOpenDetail,
        handleCloseDetail,
        productToShow,
        setProductToShow
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropType.node
}
