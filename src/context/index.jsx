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

  // Search
  const [query, setQuery] = useState('')

  // Categories
  const [categories, setCategories] = useState(null)

  useEffect(() => {
    axios
      .get('/categories')
      .then((response) => setCategories(response.data))
      .catch((err) => console.error(err))
  }, [])

  // Products list
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState(null)

  useEffect(() => {
    setLoading(true)
    if (category && categories) {
      const currentCategory = categories.filter(cat => cat.name.toLowerCase() === category.toLowerCase())

      axios
        .get(`/products/?categoryId=${currentCategory[0].id}`)
        .then((response) => {
          setProducts(response.data)
          setLoading(false)
        })
        .catch((err) => console.error(err))
    } else {
      axios
        .get('/products')
        .then((response) => {
          setProducts(response.data)
          setLoading(false)
        })
        .catch((err) => console.error(err))
    }
  }, [category, categories])

  // Product Detail
  const [productDetailOpen, setProductDetailOpen] = useState(false)
  const [productToShow, setProductToShow] = useState(null)

  const handleOpenDetail = () => setProductDetailOpen(true)
  const handleCloseDetail = () => setProductDetailOpen(false)

  // Orders
  const [order, setOrder] = useState([])

  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredProducts(filteredProducts)
  }, [query, products])

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
        setQuery,
        loading,
        filteredProducts,
        setCategory
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropType.node
}
