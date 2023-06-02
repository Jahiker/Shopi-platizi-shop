import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronDoubleLeftIcon } from '@heroicons/react/24/outline'

import CartItem from '../../components/CartItem'
import { CartContext } from '../../context'

const MyOrder = () => {
  const [currentOrder, setCurrentOrder] = useState(null)

  const { order } = useContext(CartContext)
  const { id } = useParams()

  useEffect(() => {
    if (!id) {
      setCurrentOrder(order.slice(-1)[0])
    } else {
      const selectedOrder = order.find(item => item.id.toString() === id)

      setCurrentOrder(selectedOrder)
    }
  }, [id, order])

  return (
    <div>
      <div className='flex items-start justify-between'>
        <h1 className='mb-4 text-3xl font-bold'>My Order</h1>
        <Link to='/my-orders/'>
          <ChevronDoubleLeftIcon className='w-5 h-5 text-black' />
        </Link>
      </div>
      {currentOrder && (
        <div className='w-[50%] p-6 m-auto flex flex-col gap-4'>
          {currentOrder.products?.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default MyOrder
