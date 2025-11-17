import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeaturedGrid from '../components/FeaturedGrid'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <FeaturedGrid />
      <Footer />
    </div>
  )
}
