import { createContext, useState, useEffect } from 'react'
import PropType from 'prop-types'

import axios from '../axios'

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

  // Products list
  const [products, setProducts] = useState(null)

  useEffect(() => {
    axios
      .get('/products')
      .then((response) => setProducts(response.data))
      .catch((err) => console.error(err))
  }, [])

  // Product Detail
  const [productDetailOpen, setProductDetailOpen] = useState(false)
  const [productToShow, setProductToShow] = useState(null)

  const handleOpenDetail = () => setProductDetailOpen(true)
  const handleCloseDetail = () => setProductDetailOpen(false)

  // Orders
  const [order, setOrder] = useState([])

  // Search
  const [query, setQuery] = useState('')

  return (
    <CartContext.Provider
      value={{
        count,
        setCount,
        products,
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
        setOrder,
        query,
        setQuery
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropType.node
}
