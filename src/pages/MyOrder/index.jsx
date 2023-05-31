import { useContext } from 'react'
import CartItem from '../../components/CartItem'
import { CartContext } from '../../context'

const MyOrder = () => {
  const { order } = useContext(CartContext)

  console.log(order.slice(-1))

  return (
    <div>
      <h1>MyOrder</h1>
      {order.slice(-1)[0] && (
        <div className='w-[50%] p-6 m-auto flex flex-col gap-4'>
          {order.slice(-1)[0].products?.map(product => (
            <CartItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default MyOrder
