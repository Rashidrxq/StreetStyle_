# StreetStyle - T-Shirt E-commerce Website

This is a complete e-commerce website for selling t-shirts built with Next.js 14, TypeScript, and Tailwind CSS.

## Features Implemented

1. **Product Management**
   - Product data structure with sample t-shirts
   - Product listing with filtering by category
   - Product detail pages with size and color selection

2. **Shopping Cart**
   - Add/remove items from cart
   - Update quantities
   - Cart context management with React Context API

3. **Checkout Process**
   - Shipping information form
   - Payment information form
   - Order confirmation page

4. **UI Components**
   - Responsive header with navigation and cart indicator
   - Hero section for homepage
   - Product cards with ratings and pricing
   - Footer with site information

## Pages

- `/` - Homepage with featured products
- `/products` - All products with filtering and sorting
- `/product/[id]` - Product detail page
- `/cart` - Shopping cart
- `/checkout` - Checkout process

## How to Run

Due to some environment issues, you may need to:

1. Navigate to the project directory
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Visit `http://localhost:3000` in your browser

## Technologies Used

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Context API for state management

## Components

- `Header` - Navigation and cart indicator
- `Footer` - Site information and links
- `Hero` - Homepage hero section
- `ProductCard` - Product display component
- `CartContext` - Shopping cart state management

This project demonstrates a complete e-commerce workflow with product browsing, cart management, and checkout process.