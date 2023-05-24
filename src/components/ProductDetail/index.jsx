import { useContext } from 'react'
import { XCircleIcon } from '@heroicons/react/24/outline'

import { CartContext } from '../../context'

const ProductDetail = () => {
  const context = useContext(CartContext)

  return (
    <aside
      className={`w-[360px] h-[calc(100vh-80px)] flex flex-col fixed bg-white right-2 top-[80px] border-black/40 rounded-lg z-10 shadow-2xl p-6 border-2 transition-all duration-100 ${
        context.productDetailOpen ? 'translate-x-[0%]' : 'translate-x-[120%]'
      }`}
    >
      <div className='flex items-center justify-between'>
        <h2 className='text-3xl font-medium'>Detail</h2>
        <button onClick={() => context.handleCloseDetail()}>
          <XCircleIcon className='w-6 h-6 text-black cursor-pointer' />
        </button>
      </div>
      {context.productToShow && (
        <>
          <figure>
            <img
              src={context.productToShow.images[0]}
              alt={context.productToShow.title}
              className='w-full rounded-lg'
            />
          </figure>
          <div className='py-6'>
            <p className='text-2xl font-medium text-gray-400'>
              ${context.productToShow.price}
            </p>
            <h5 className='font-bold text-md'>{context.productToShow.title}</h5>
            <p className='text-sm font-light'>
              {context.productToShow.description}
            </p>
          </div>
        </>
      )}
    </aside>
  )
}

export default ProductDetail
