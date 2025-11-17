import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { api } from '../lib/api'

export default function Product() {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedSize, setSelectedSize] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        const data = await api.get(`/sneakers/${id}`)
        setItem(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [id])

  if (loading) return <div className="min-h-screen"><Navbar /><div className="max-w-6xl mx-auto px-4 py-10">Loading...</div><Footer /></div>
  if (!item) return <div className="min-h-screen"><Navbar /><div className="max-w-6xl mx-auto px-4 py-10">Not found</div><Footer /></div>

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
        <div>
          <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
            <img src={item.images?.[0]} alt={item.name} className="w-full h-full object-cover"/>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500">{item.brand}</p>
          <h1 className="text-3xl font-extrabold mt-1">{item.name}</h1>
          <p className="mt-2 text-xl font-semibold">${item.price.toFixed(2)}</p>
          <p className="mt-4 text-gray-600">{item.description}</p>
          <div className="mt-6">
            <p className="text-sm font-medium mb-2">Select size</p>
            <div className="flex flex-wrap gap-2">
              {item.sizes?.map(s => (
                <button key={s} onClick={() => setSelectedSize(s)} className={`px-3 py-2 rounded-md border ${selectedSize===s ? 'bg-black text-white' : 'hover:bg-gray-50'}`}>{s}</button>
              ))}
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <button className="bg-black text-white px-5 py-3 rounded-md">Add to cart</button>
            <Link to="/shop" className="px-5 py-3 rounded-md border border-gray-300 hover:bg-gray-50">Continue shopping</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
