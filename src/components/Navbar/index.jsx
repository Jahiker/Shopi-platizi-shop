import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/24/outline'

import { CartContext } from '../../context'

const Navbar = () => {
  const activeStyle = 'underline underline-offset-4'

  const context = useContext(CartContext)

  return (
    <nav className='fixed top-0 z-10 flex items-center justify-between w-full px-8 py-5 text-sm bg-white shadow-md'>
      <ul className='flex items-center gap-3'>
        <li className='text-lg font-bold'>
          <NavLink to='/'>Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/furnitures'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/toys'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Others
          </NavLink>
        </li>
      </ul>

      <ul className='flex items-center gap-3'>
        <li className='flex items-center gap-1'>
          <UserCircleIcon className='w-4 text-black/40' />
          <span className='text-black/40'>user@email.com</span>
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Sign In
          </NavLink>
        </li>
        <li className='flex items-center justify-start'><ShoppingBagIcon className='w-4 h-4' /> {context.count}</li>
      </ul>
    </nav>
  )
}

export default Navbar
