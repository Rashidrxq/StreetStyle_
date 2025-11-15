'use client';

import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getTotalItems, getTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
            <Link href="/products" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart ({getTotalItems()})</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {cartItems.map((item) => (
                <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex flex-col sm:flex-row p-6 border-b border-gray-200 last:border-b-0">
                  {/* Product Image */}
                  <div className="bg-gray-200 h-32 w-32 rounded-lg flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 flex items-center justify-center">
                    <span className="text-gray-500">Image</span>
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{item.product.name}</h3>
                        <p className="text-gray-600">{item.product.category}</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className="bg-gray-100 px-2 py-1 rounded text-sm">Size: {item.size}</span>
                          <span className="bg-gray-100 px-2 py-1 rounded text-sm">Color: {item.color}</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    
                    {/* Quantity and Price */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <button 
                          className="bg-gray-200 text-gray-800 px-3 py-1 rounded-l-md hover:bg-gray-300"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="bg-gray-100 px-4 py-1">{item.quantity}</span>
                        <button 
                          className="bg-gray-200 text-gray-800 px-3 py-1 rounded-r-md hover:bg-gray-300"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold text-gray-900">${(item.product.price * item.quantity).toFixed(2)}</p>
                        <p className="text-gray-600 text-sm">${item.product.price.toFixed(2)} each</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900">$5.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900">${(getTotalPrice() * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${(getTotalPrice() + 5.99 + (getTotalPrice() * 0.08)).toFixed(2)}</span>
                </div>
              </div>
              
              <Link 
                href="/checkout" 
                className="block w-full bg-black text-white text-center py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Proceed to Checkout
              </Link>
              
              <Link 
                href="/products" 
                className="block w-full text-center py-3 text-gray-600 hover:text-gray-900 mt-4"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}