import React, { useContext } from 'react'
import { XCircleIcon, FaceFrownIcon } from '@heroicons/react/24/outline'

import CartItem from '../CartItem'

import { CartContext } from '../../context'

const MiniCartAside = () => {
  const context = useContext(CartContext)

  const handleDeleteProduct = (id) => {
    const newCartProducts = context.cartProducts.filter(product => product.id !== id)
    context.setCartProducts([...newCartProducts])
    context.setCount(newCartProducts.length)
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
          <div className='flex flex-col gap-4 mt-10 overflow-y-scroll scrollbar-thin'>
            {context.cartProducts.map((product) => ((
              <CartItem key={product.id} product={product} handleDeleteProduct={handleDeleteProduct} />
            )))}
          </div>
          )
        : (
          <div className='flex flex-col items-center justify-center gap-4 mt-10 overflow-y-scroll scrollbar-thin'>
            <h3>Your Cart is Empty</h3>
            <FaceFrownIcon className='w-10 h-10 text-gray-400' />
          </div>
          )}
    </aside>
  )
}

export default MiniCartAside
