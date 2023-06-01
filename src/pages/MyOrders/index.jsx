import { useContext } from 'react'
import { ChevronDoubleLeftIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

import OrdersCard from '../../components/OrdersCard/OrdersCard'

import { CartContext } from '../../context'

const MyOrders = () => {
  const { order } = useContext(CartContext)
  return (
    <div className='w-full p-6'>
      <div className='flex justify-between items-start'>
        <h1 className='mb-4 text-3xl font-bold'>My Orders</h1>
        <Link to='/'>
          <ChevronDoubleLeftIcon className='w-5 h-5 text-black' />
        </Link>
      </div>
      <div className='flex flex-col gap-5'>
        {order?.map(item => (
          <OrdersCard key={item.id} order={item} />
        ))}
      </div>
    </div>
  )
}

export default MyOrders
