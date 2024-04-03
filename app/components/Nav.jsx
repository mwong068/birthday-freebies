import { NavLink } from '@remix-run/react'

export default function Nav() {
  return (
    <div className="text-center">
        <h1 className="text-3xl font-bold pt-5 pb-3">Birthday Freebies</h1>
        <div className='text-center inline-block'>
            <nav className="flex gap-4">
            <NavLink
                to='/'
                className={({ isActive }) => (isActive ? 'font-bold' : '')}>
                Home
            </NavLink>
            <NavLink
                to='/about'
                className={({ isActive }) => (isActive ? 'font-bold' : '')}>
                About
            </NavLink>
            <NavLink
                to='/stores'
                className={({ isActive }) => (isActive ? 'font-bold' : '')}>
                Stores
            </NavLink>
            </nav>
            <hr/>
        </div>
    </div>
  )
}