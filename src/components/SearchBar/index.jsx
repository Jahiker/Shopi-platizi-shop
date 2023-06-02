import React from 'react'
import PropType from 'prop-types'

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className='flex items-center justify-center p-6'>
      <input
        type='text'
        className='border-2 h-[45px] w-[60%] p-3 rounded-lg focus:outline-none'
        placeholder='Search a product'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  )
}

SearchBar.propTypes = {
  query: PropType.string,
  setQuery: PropType.func
}

export default SearchBar
