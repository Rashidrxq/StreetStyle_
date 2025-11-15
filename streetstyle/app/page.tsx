import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our latest collection of premium t-shirts designed for comfort and style.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              View All Products
            </button>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the perfect t-shirt for every occasion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 h-48 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-500">Category Image</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Basic Tees</h3>
              <p className="text-gray-600 mb-4">Essential wardrobe staples</p>
              <button className="text-blue-600 font-medium hover:text-blue-800">
                Shop Now →
              </button>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 h-48 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-500">Category Image</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Graphic Prints</h3>
              <p className="text-gray-600 mb-4">Bold designs for standout style</p>
              <button className="text-blue-600 font-medium hover:text-blue-800">
                Shop Now →
              </button>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 h-48 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-500">Category Image</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Collection</h3>
              <p className="text-gray-600 mb-4">Luxury fabrics and exclusive designs</p>
              <button className="text-blue-600 font-medium hover:text-blue-800">
                Shop Now →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}