import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Elevate your style with premium sneakers
          </h1>
          <p className="mt-4 text-gray-600 max-w-prose">
            Discover curated drops from top brands. Lightweight, responsive, and built to perform. Shop the latest arrivals now.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/shop" className="bg-black text-white px-5 py-3 rounded-md hover:opacity-90">Shop now</Link>
            <a href="#featured" className="px-5 py-3 rounded-md border border-gray-300 hover:bg-gray-50">Browse featured</a>
          </div>
        </div>
        <div className="relative">
          <img className="w-full rounded-xl shadow-2xl" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1400&auto=format&fit=crop" alt="Sneakers"/>
          <div className="absolute -bottom-6 -left-6 bg-white shadow rounded-lg p-4">
            <p className="text-sm font-semibold">Free shipping</p>
            <p className="text-xs text-gray-500">On orders over $100</p>
          </div>
        </div>
      </div>
    </section>
  )
}
