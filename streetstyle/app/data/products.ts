export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  sizes: string[];
  colors: string[];
  category: string;
  rating: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic White Tee",
    description: "Premium cotton t-shirt with a comfortable fit and durable construction.",
    price: 24.99,
    imageUrl: "/tshirt1.jpg",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray"],
    category: "Basic",
    rating: 4.5
  },
  {
    id: "2",
    name: "Graphic Print Tee",
    description: "Eye-catching graphic print on high-quality fabric for a bold statement.",
    price: 29.99,
    imageUrl: "/tshirt2.jpg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White"],
    category: "Graphic",
    rating: 4.7
  },
  {
    id: "3",
    name: "V-Neck Summer Shirt",
    description: "Lightweight v-neck t-shirt perfect for warm weather and casual outings.",
    price: 27.99,
    imageUrl: "/tshirt3.jpg",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "White", "Red"],
    category: "Summer",
    rating: 4.3
  },
  {
    id: "4",
    name: "Pocket Crew Neck",
    description: "Classic crew neck with chest pocket for a timeless casual look.",
    price: 26.99,
    imageUrl: "/tshirt4.jpg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Green", "Blue", "Black"],
    category: "Casual",
    rating: 4.6
  },
  {
    id: "5",
    name: "Slim Fit Polo",
    description: "Slim fit polo shirt with a soft texture and breathable fabric.",
    price: 34.99,
    imageUrl: "/tshirt5.jpg",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Pink", "Blue", "White"],
    category: "Formal",
    rating: 4.8
  },
  {
    id: "6",
    name: "Oversized Comfort Tee",
    description: "Extra roomy fit for ultimate comfort and relaxed style.",
    price: 31.99,
    imageUrl: "/tshirt6.jpg",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Black", "Gray", "White"],
    category: "Comfort",
    rating: 4.4
  }
];