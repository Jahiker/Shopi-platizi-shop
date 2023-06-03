import { useContext, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'

import Card from '../../components/Card'
import ProductDetail from '../../components/ProductDetail'
import SearchBar from '../../components/SearchBar'
import { CartContext } from '../../context'

const Home = () => {
  const { category } = useParams()
  const location = useLocation()
  const { filteredProducts, query, setQuery, loading, setCategory } = useContext(CartContext)

  useEffect(() => {
    if (category) setCategory(category)
  }, [location])

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      <ProductDetail />
      {loading && <h2 className='text-3xl font-bold text-black'>Loading...</h2>}
      {(filteredProducts.length > 0) &&
        (
          <div className='grid w-full grid-cols-4 gap-4 p-8'>
            {filteredProducts?.map((product, index) => (
              <Card key={`${product.id}-${index}`} product={product} />
            ))}
          </div>
        )}
    </div>
  )
}

export default Home
