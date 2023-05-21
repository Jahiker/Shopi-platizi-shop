
const Card = () => {
  return (
    <div className='w-56 bg-white cursor-pointer h-60'>
      <figure className='relative w-full mb-2 h-4/5'>
        <span className='absolute bottom-0 left-0 px-2 py-[2px] text-xs text-black rounded-xl bg-white/60 m-2 '>Electronics</span>
        <img src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&w=1000&q=80' alt='image' className='object-cover object-center w-full h-full rounded-lg' />
        <div className='absolute top-0 right-0 flex items-center justify-center w-6 h-6 m-2 leading-none bg-white rounded-full px-3 py-0.5 text-xs'>+</div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>Headphones</span>
        <span className=''>$300</span>
      </p>
    </div>
  )
}

export default Card
