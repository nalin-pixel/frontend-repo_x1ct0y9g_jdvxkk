import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../lib/api'

export default function FeaturedGrid() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const data = await api.get('/sneakers', { featured: true, limit: 8 })
        setItems(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) {
    return (
      <section id="featured" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Featured</h2>
        <p className="text-gray-500">Loading...</p>
      </section>
    )
  }

  return (
    <section id="featured" className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Featured</h2>
        <Link to="/shop" className="text-sm text-gray-600 hover:text-black">View all</Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map(item => (
          <Link key={item.id} to={`/product/${item.id}`} className="group">
            <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
              <img src={item.images?.[0]} alt={item.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">{item.brand}</p>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm">${item.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
