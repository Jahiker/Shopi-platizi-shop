import { createContext, useState, useEffect } from 'react'
import PropType from 'prop-types'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  // Shopping Cart
  const [count, setCount] = useState(0)
  const [cartProducts, setCartProducts] = useState([])
  const [miniCartOpen, setMiniCartOpen] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('CART_V1')) return

    const initialCartProducts = JSON.parse(localStorage.getItem('CART_V1'))

    setCartProducts(initialCartProducts)
    setCount(initialCartProducts.length)
  }, [])

  const handleOpenMiniCart = () => setMiniCartOpen(true)
  const handleCloseMiniCart = () => setMiniCartOpen(false)

  // Product Detail
  const [productDetailOpen, setProductDetailOpen] = useState(false)
  const [productToShow, setProductToShow] = useState(null)

  const handleOpenDetail = () => setProductDetailOpen(true)
  const handleCloseDetail = () => setProductDetailOpen(false)

  // Orders
  const [order, setOrder] = useState([])

  return (
    <CartContext.Provider
      value={{
        count,
        setCount,
        productDetailOpen,
        handleOpenDetail,
        handleCloseDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        miniCartOpen,
        handleOpenMiniCart,
        handleCloseMiniCart,
        setMiniCartOpen,
        order,
        setOrder
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropType.node
}
