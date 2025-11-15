'use client';

import { useState } from "react";
import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function CheckoutPage() {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would process the payment here
    console.log('Order submitted:', { ...formData, items: cartItems });
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto text-green-500 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for your order. A confirmation email has been sent to {formData.email}.
            </p>
            <div className="bg-gray-100 rounded-lg p-6 mb-6 text-left">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2">
                {cartItems.map(item => (
                  <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex justify-between">
                    <span>{item.product.name} (x{item.quantity})</span>
                    <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t border-gray-300 pt-2 mt-4 flex justify-between font-bold">
                  <span>Total</span>
                  <span>${(getTotalPrice() + 5.99 + (getTotalPrice() * 0.08)).toFixed(2)}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-center">
                Continue Shopping
              </Link>
              <Link href="/" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">You need to add items to your cart before checking out.</p>
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Shipping Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Payment Information</h2>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                        <input
                          type="text"
                          id="expiryDate"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                  Place Order
                </button>
              </form>
            </div>
          </div>
          
          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {cartItems.map(item => (
                  <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex justify-between">
                    <div>
                      <p className="font-medium">{item.product.name}</p>
                      <p className="text-sm text-gray-600">Size: {item.size}, Color: {item.color} × {item.quantity}</p>
                    </div>
                    <p className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              
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
                href="/cart" 
                className="block w-full text-center py-3 text-gray-600 hover:text-gray-900"
              >
                Back to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}