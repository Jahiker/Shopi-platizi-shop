import { useContext } from 'react'
import PropType from 'prop-types'
import {
  PlusCircleIcon,
  PhotoIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

import { CartContext } from '../../context'

const Card = ({ product }) => {
  const context = useContext(CartContext)

  const showProduct = (product) => {
    context.handleOpenDetail()
    context.setProductToShow(product)
  }

  const handleAddProductToCart = (e, product) => {
    e.stopPropagation()

    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, product])
    context.handleOpenMiniCart()
  }

  const RenderIcon = () => {
    const isInCart = context.cartProducts.some(
      (cartProduct) => cartProduct.id === product.id
    )

    if (isInCart) {
      return (
        <CheckCircleIcon className='absolute top-0 right-0 flex items-center justify-center w-6 h-6 m-2 text-gray-300 bg-white rounded-full cursor-not-allowed' />
      )
    } else {
      return (
        <PlusCircleIcon
          className='absolute top-0 right-0 flex items-center justify-center w-6 h-6 m-2 text-black bg-white rounded-full'
          onClick={(e) => handleAddProductToCart(e, product)}
        />
      )
    }
  }

  return (
    <div
      className='w-full bg-white rounded-md shadow-md cursor-pointer h-60'
      onClick={() => showProduct(product)}
    >
      <figure className='relative w-full mb-2 h-4/5'>
        <span className='absolute bottom-0 left-0 px-2 py-[2px] text-xs text-black rounded-xl bg-white/60 m-2 '>
          {product.category.name}
        </span>
        {product.images[0]
          ? (
            <img
              src={product.images[0]}
              alt={product.title}
              className='object-cover object-center w-full h-full rounded-lg'
            />
            )
          : (
            <PhotoIcon className='object-cover object-center w-full h-full rounded-lg cursor-pointer' />
            )}
        <RenderIcon />
      </figure>
      <p className='flex justify-between gap-3 p-2'>
        <span className='overflow-hidden text-sm font-light whitespace-nowrap max-w-50px'>
          {product.title}
        </span>
        <span className='font-bold'>${product.price}</span>
      </p>
    </div>
  )
}

Card.propTypes = {
  product: PropType.object
}

export default Card
