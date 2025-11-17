import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { api } from '../lib/api'

export default function Shop() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        const params = Object.fromEntries(searchParams.entries())
        const data = await api.get('/sneakers', params)
        setItems(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [searchParams])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-end justify-between mb-6">
          <h1 className="text-3xl font-extrabold">Shop</h1>
          <div className="text-sm text-gray-600">{items.length} results</div>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
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
        )}
      </div>
      <Footer />
    </div>
  )
}
