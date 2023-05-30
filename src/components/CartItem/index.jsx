import React from 'react'
import PropTypes from 'prop-types'
import { TrashIcon } from '@heroicons/react/24/outline'

const CartItem = ({ product, handleDeleteProduct }) => {
  return (
    <div key={product.title} className='flex items-center justify-start gap-4'>
      <figure className='w-[40%]'>
        <img
          src={product.images[0]}
          alt={product.title}
          className='w-full rounded-lg'
        />
      </figure>
      <div className='w-full py-6'>
        <div className='flex justify-end'>
          <TrashIcon className='w-4 h-4 text-red-800 cursor-pointer' onClick={() => handleDeleteProduct(product.id)} />
        </div>
        <p className='text-lg font-medium text-gray-400'>${product.price}</p>
        <h5 className='text-sm font-bold'>{product.title}</h5>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  product: PropTypes.object,
  handleDeleteProduct: PropTypes.func
}

export default CartItem
