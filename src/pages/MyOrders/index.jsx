import { useContext } from 'react'

import OrdersCard from '../../components/OrdersCard/OrdersCard'

import { CartContext } from '../../context'

const MyOrders = () => {
  const { order } = useContext(CartContext)
  return (
    <div className='w-full p-6'>
      <h1 className='mb-4 text-3xl font-bold'>My Orders</h1>
      <div>
        {order?.map(item => (
          <OrdersCard key={item.date} order={item} />
        ))}
      </div>
    </div>
  )
}

export default MyOrders
