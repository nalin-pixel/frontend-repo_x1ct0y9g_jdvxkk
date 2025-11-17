import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart, Search } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-extrabold tracking-tight">Sneakly</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/" end className={({isActive}) => isActive ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'}>Home</NavLink>
          <NavLink to="/shop" className={({isActive}) => isActive ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'}>Shop</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'}>Contact</NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-gray-100"><Search size={20}/></button>
          <Link to="/cart" className="relative p-2 rounded-full hover:bg-gray-100">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] rounded-full px-1">0</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
