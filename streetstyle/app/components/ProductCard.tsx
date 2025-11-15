'use client';

import { Product } from "../data/products";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="bg-gray-200 h-64 flex items-center justify-center">
        <span className="text-gray-500">Product Image</span>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{product.category}</p>
          </div>
          <div className="flex items-center bg-yellow-100 px-2 py-1 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-yellow-800 text-sm ml-1">{product.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <Link 
            href={`/product/${product.id}`}
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}