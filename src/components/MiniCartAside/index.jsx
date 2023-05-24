import React, { useContext } from 'react'
import { XCircleIcon } from '@heroicons/react/24/outline'

import { CartContext } from '../../context'

const MiniCartAside = () => {
  const context = useContext(CartContext)

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
      <div className='flex flex-col gap-4 mt-10 overflow-y-scroll'>
        {context.cartProducts.map((product) => ((
          <div key={product.title} className='flex items-center justify-start gap-4'>
            <figure className='w-[40%]'>
              <img
                src={product.images[0]}
                alt={product.title}
                className='w-full rounded-lg'
              />
            </figure>
            <div className='py-6'>
              <p className='text-lg font-medium text-gray-400'>
                ${product.price}
              </p>
              <h5 className='text-sm font-bold'>{product.title}</h5>
              {/* <p className='text-sm font-light'>
                {product.description}
                </p> */}
            </div>
          </div>
        )))}
      </div>
    </aside>
  )
}

export default MiniCartAside
