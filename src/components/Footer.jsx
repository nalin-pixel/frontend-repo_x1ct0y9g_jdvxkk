export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <p className="text-xl font-extrabold">Sneakly</p>
          <p className="mt-2 text-gray-600">Premium sneakers curated for style and performance.</p>
        </div>
        <div>
          <p className="font-semibold mb-3">Shop</p>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/shop">All sneakers</a></li>
            <li><a href="/shop?brand=Nike">Nike</a></li>
            <li><a href="/shop?brand=Adidas">Adidas</a></li>
            <li><a href="/shop?brand=Reebok">Reebok</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3">Company</p>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3">Get updates</p>
          <form className="flex gap-2">
            <input className="border rounded-md px-3 py-2 w-full" placeholder="Email address" />
            <button className="bg-black text-white px-4 rounded-md">Join</button>
          </form>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-6">© {new Date().getFullYear()} Sneakly. All rights reserved.</div>
    </footer>
  )
}
