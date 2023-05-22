import React from 'react'
import { XCircleIcon } from '@heroicons/react/24/outline'

const ProductDetail = () => {
  return (
    <aside className='w-[360px] h-[calc(100vh-80px)] flex flex-col fixed bg-white right-2 top-[80px] border-black rounded-lg z-10 shadow-xl p-6 border-2'>
      <div className='flex items-center justify-between'>
        <h2 className='text-3xl font-medium'>Detail</h2>
        <button>
          <XCircleIcon className='w-6 h-6 text-black' />
        </button>
      </div>
    </aside>
  )
}

export default ProductDetail
