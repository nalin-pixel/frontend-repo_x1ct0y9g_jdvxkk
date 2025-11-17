import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Static from './pages/Static'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/about" element={<Static title="About Sneakly">We curate premium sneakers from top brands. Our mission is to help you move better and look great doing it.</Static>} />
      <Route path="/contact" element={<Static title="Contact">Reach us anytime at hello@sneakly.shop — we usually respond within 24 hours.</Static>} />
    </Routes>
  )
}
