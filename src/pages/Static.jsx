import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Static({ title, children }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold">{title}</h1>
        <div className="prose prose-gray max-w-none mt-4">{children}</div>
      </div>
      <Footer />
    </div>
  )
}
