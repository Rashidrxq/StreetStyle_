# StreetStyle - T-Shirt E-commerce Website

A modern, responsive e-commerce platform for selling premium t-shirts built with Next.js 14, TypeScript, and Tailwind CSS.

![Project Screenshot](public/screenshot.png)

## Features

### Current Implementation
- **Product Management**: Browse, filter, and sort t-shirts by category
- **Shopping Cart**: Add/remove items, adjust quantities, real-time updates
- **Checkout Process**: Multi-step checkout with form validation
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dynamic Routing**: Product detail pages with unique URLs
- **State Management**: React Context API for cart functionality

### Technologies Used
- [Next.js 14](https://nextjs.org/) with App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Context API](https://reactjs.org/docs/context.html)

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd streetstyle
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production
```bash
npm run build
npm start
```

## Project Structure
```
app/
├── components/          # Reusable UI components
├── context/             # React context providers
├── data/                # Static data and types
├── product/[id]/        # Dynamic product detail pages
├── products/            # Product listing page
├── cart/                # Shopping cart page
├── checkout/            # Checkout flow
├── layout.tsx           # Root layout
└── page.tsx             # Homepage
```

## Future Enhancements

### AI Integration Roadmap
See detailed [AI Integration Plan](AI_INTEGRATION_PLAN.md) for technical implementation details.

Key areas for AI integration:
- AI-powered product recommendations
- AI chatbot for customer support
- Visual search capabilities
- AI-generated product descriptions

### SEO Optimization Roadmap
See detailed [SEO Implementation Guide](SEO_IMPLEMENTATION.md) for optimization strategies.

Key SEO focus areas:
- Technical SEO (structured data, sitemaps, canonical URLs)
- Content SEO (keyword optimization, blog integration)
- Performance optimization (Core Web Vitals)
- Analytics and monitoring

### Additional Features Roadmap
See comprehensive [Future Updates Roadmap](FUTURE_UPDATES.md) for detailed plans.

Additional features planned:
- User accounts system
- Advanced product features (reviews, size guides)
- Enhanced checkout experience
- Admin dashboard

## Deployment

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

### Other Platforms
- **Netlify**: `netlify deploy`
- **AWS**: Use Amplify or S3 + CloudFront
- **Google Cloud**: App Engine or Firebase Hosting

## Environment Variables
Create a `.env.local` file in the root directory:
```env
# Next.js Environment
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Payment Processing (Optional)
STRIPE_PUBLIC_KEY=your-stripe-public-key
STRIPE_SECRET_KEY=your-stripe-secret-key
```

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
Muhammed Rashid - [@your_twitter](https://twitter.com/your_twitter) - your.email@example.com

Project Link: [https://github.com/yourusername/streetstyle](https://github.com/yourusername/streetstyle)