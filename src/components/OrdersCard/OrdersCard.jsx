import React from 'react'
import PropTypes from 'prop-types'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const OrdersCard = ({ order }) => {
  return (
    <div className='flex items-center justify-start w-full max-w-md gap-4 p-4 mx-auto border border-black'>
      <div className='w-full py-6'>
        <div className='flex justify-end'>
          <Link to={`/my-orders/${order.id}`}>
            <ArrowLeftCircleIcon
              className='w-6 h-6 text-black cursor-pointer'
            />
          </Link>
        </div>
        <p className='text-lg font-medium text-gray-400'>${order.total}</p>
        <span>{order.date}</span>
        <h5 className='text-sm font-bold'>{order.countProducts} Products</h5>
      </div>
    </div>
  )
}

OrdersCard.propTypes = {
  order: PropTypes.object
}

export default OrdersCard
