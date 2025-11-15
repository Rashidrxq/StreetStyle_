'use client';

import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { useState } from "react";

export default function ProductsPage() {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("featured");

  // Filter products based on category
  const filteredProducts = filter === "all" 
    ? products 
    : products.filter(product => product.category.toLowerCase() === filter.toLowerCase());

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sort) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0; // Keep original order for "featured"
    }
  });

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(products.map(p => p.category)))];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Products</h1>
        <p className="text-gray-600 mb-8">Discover our complete collection of premium t-shirts</p>

        {/* Filters and Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full capitalize ${
                  filter === category
                    ? "bg-black text-white"
                    : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
                }`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center">
            <label htmlFor="sort" className="mr-2 text-gray-700">Sort by:</label>
            <select
              id="sort"
              className="border border-gray-300 rounded-md px-3 py-2 bg-white"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}