import { useState, useEffect } from 'react'
import axios from '../../axios'

import Card from '../../components/Card'

const Home = () => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    axios
      .get('/products')
      .then((response) => setProducts(response.data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div>
      <h1>Home</h1>
      <div className='grid w-full grid-cols-4 gap-4 p-8'>
        {products?.map((product, index) => (
          <Card key={`${product.id}-${index}`} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Home
