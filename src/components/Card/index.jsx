import { useContext } from 'react'
import PropType from 'prop-types'

import { CartContext } from '../../context'

const Card = ({ product }) => {
  // console.log('🚀 ~ file: index.jsx:4 ~ Card ~ product:', product)
  const context = useContext(CartContext)

  return (
    <div className='w-full bg-white rounded-md shadow-md cursor-pointer h-60'>
      <figure className='relative w-full mb-2 h-4/5'>
        <span className='absolute bottom-0 left-0 px-2 py-[2px] text-xs text-black rounded-xl bg-white/60 m-2 '>
          {product.category.name}
        </span>
        <img
          src={product.images[0]}
          alt={product.title}
          className='object-cover object-center w-full h-full rounded-lg'
        />
        <div className='absolute top-0 right-0 flex items-center justify-center w-6 h-6 m-2 leading-none bg-white rounded-full px-3 py-0.5 text-xs' onClick={() => context.setCount(context.count + 1)}>
          +
        </div>
      </figure>
      <p className='flex justify-between p-2'>
        <span className='text-sm font-light'>{product.title}</span>
        <span className='font-bold'>${product.price}</span>
      </p>
    </div>
  )
}

Card.propTypes = {
  product: PropType.object
}

export default Card
