import React from 'react'
import PropTypes from 'prop-types'
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const OrdersCard = ({ order }) => {
  return (
    <div className='flex items-center justify-start w-full max-w-md gap-4 p-6 mx-auto border border-black rounded-lg'>
      <div className='relative flex items-start justify-between w-full'>
        <Link to={`/my-order/${order.id}`} className='absolute bottom-[-35%] right-0'>
          <ArrowRightCircleIcon
            className='w-6 h-6 text-black cursor-pointer transition-all hover:scale-[1.1] hover:text-gray-500'
          />
        </Link>

        <div>
          <span>{order.date}</span>
          <h5 className='text-sm font-bold'>{order.countProducts} Products</h5>
        </div>
        <p className='text-lg font-medium text-gray-400'>{order.total}</p>
      </div>
    </div>
  )
}

OrdersCard.propTypes = {
  order: PropTypes.object
}

export default OrdersCard
