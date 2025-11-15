'use client';

import { useState } from "react";
import { notFound } from "next/navigation";
import { products, Product } from "../../data/products";
import { useCart } from "../../context/CartContext";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const productId = params.id;
  const product = products.find((p: Product) => p.id === productId);
  
  // If product not found, return 404
  if (!product) {
    return notFound();
  }
  
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Image */}
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Product Image</span>
            </div>
            
            {/* Product Details */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center bg-yellow-100 px-2 py-1 rounded mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-yellow-800 text-sm ml-1">{product.rating}</span>
                </div>
                <span className="text-gray-600">({product.category})</span>
              </div>
              
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
              </div>
              
              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size: string) => (
                    <button
                      key={size}
                      className={`px-4 py-2 border rounded-md ${
                        selectedSize === size
                          ? "bg-black text-white border-black"
                          : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color: string) => (
                    <button
                      key={color}
                      className={`px-4 py-2 border rounded-md capitalize ${
                        selectedColor === color
                          ? "bg-black text-white border-black"
                          : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                      }`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quantity</h3>
                <div className="flex items-center">
                  <button 
                    className="bg-gray-200 text-gray-800 px-3 py-2 rounded-l-md hover:bg-gray-300"
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  >
                    -
                  </button>
                  <span className="bg-gray-100 px-4 py-2">{quantity}</span>
                  <button 
                    className="bg-gray-200 text-gray-800 px-3 py-2 rounded-r-md hover:bg-gray-300"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Add to Cart Button */}
              <button
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}