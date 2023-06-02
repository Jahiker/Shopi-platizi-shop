import { useContext } from 'react'

import Card from '../../components/Card'
import ProductDetail from '../../components/ProductDetail'
import SearchBar from '../../components/SearchBar'
import { CartContext } from '../../context'

const Home = () => {
  const { products, query, setQuery } = useContext(CartContext)

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      <ProductDetail />
      <div className='grid w-full grid-cols-4 gap-4 p-8'>
        {products?.map((product, index) => (
          <Card key={`${product.id}-${index}`} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Home
