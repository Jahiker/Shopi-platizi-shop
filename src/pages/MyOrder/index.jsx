import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDoubleLeftIcon } from '@heroicons/react/24/outline'

import CartItem from '../../components/CartItem'
import { CartContext } from '../../context'

const MyOrder = () => {
  const { order } = useContext(CartContext)

  console.log(order.slice(-1))

  return (
    <div>
      <div className='flex justify-between items-start'>
        <h1 className='mb-4 text-3xl font-bold'>My Order</h1>
        <Link to='/my-orders/'>
          <ChevronDoubleLeftIcon className='w-5 h-5 text-black' />
        </Link>
      </div>
      {order.slice(-1)[0] && (
        <div className='w-[50%] p-6 m-auto flex flex-col gap-4'>
          {order.slice(-1)[0].products?.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default MyOrder
