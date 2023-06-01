import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XCircleIcon, FaceFrownIcon } from '@heroicons/react/24/outline'

import CartItem from '../CartItem'

import { CartContext } from '../../context'
import { totalPrice } from '../../utils'

const MiniCartAside = () => {
  const context = useContext(CartContext)

  const handleDeleteProduct = (id) => {
    const newCartProducts = context.cartProducts.filter(
      (product) => product.id !== id
    )
    context.setCartProducts([...newCartProducts])
    context.setCount(newCartProducts.length)
    localStorage.setItem('CART_V1', JSON.stringify([...newCartProducts]))
  }

  const handleCreateOrder = () => {
    const orderToAdd = {
      id: Date.now(),
      date: Date.now('D M Y'),
      products: context.cartProducts,
      countProducts: context.count,
      total: totalPrice(context.cartProducts)
    }

    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setCount(0)
    localStorage.setItem('CART_V1', JSON.stringify([]))
  }

  return (
    <aside
      className={`w-[360px] h-[calc(100vh-80px)] flex flex-col fixed bg-white right-2 top-[80px] border-black/40 rounded-lg z-20 shadow-2xl p-6 border-2 transition-all duration-100 ${
        context.miniCartOpen ? 'translate-x-[0%]' : 'translate-x-[120%]'
      }`}
    >
      <div className='flex items-center justify-between'>
        <h2 className='text-3xl font-medium'>My Order</h2>
        <button onClick={() => context.handleCloseMiniCart()}>
          <XCircleIcon className='w-6 h-6 text-black cursor-pointer' />
        </button>
      </div>
      {context.cartProducts?.length > 0
        ? (
          <div className='flex flex-col gap-1 mt-10 overflow-y-scroll flex-1 scrollbar-thin h-[53vh]'>
            {context.cartProducts.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                handleDeleteProduct={handleDeleteProduct}
              />
            ))}
          </div>
          )
        : (
          <div className='flex flex-col items-center justify-center gap-4 mt-10 flex-1 overflow-y-scroll scrollbar-thin h-[53vh]'>
            <h3>Your Cart is Empty</h3>
            <FaceFrownIcon className='w-10 h-10 text-gray-400' />
          </div>
          )}
      <div className='w-full border-t-2'>
        <p className='flex justify-between py-4 text-lg'>
          <span>Total:</span>{' '}
          <span className='font-bold'>{totalPrice(context.cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button
            onClick={() => handleCreateOrder()}
            className='flex items-center justify-center w-full p-4 text-white bg-black rounded-md hover:bg-gray-500'
          >
            CHECKOUT
          </button>
        </Link>
      </div>
    </aside>
  )
}

export default MiniCartAside
