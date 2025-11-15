# SEO Implementation Guide

Comprehensive guide for implementing SEO best practices in the StreetStyle e-commerce platform.

## Table of Contents
1. [Technical SEO](#technical-seo)
2. [On-Page SEO](#on-page-seo)
3. [Content SEO](#content-seo)
4. [Performance Optimization](#performance-optimization)
5. [Analytics and Monitoring](#analytics-and-monitoring)

## Technical SEO

### Structured Data Implementation

#### Product Schema Markup
```json
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Classic White Tee",
  "image": "https://example.com/tshirt1.jpg",
  "description": "Premium cotton t-shirt with a comfortable fit",
  "sku": "TSHIRT-001",
  "brand": {
    "@type": "Brand",
    "name": "StreetStyle"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://example.com/product/1",
    "priceCurrency": "USD",
    "price": "24.99",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "89"
  }
}
```

#### Breadcrumb Schema
```json
{
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://example.com/"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Products",
    "item": "https://example.com/products"
  },{
    "@type": "ListItem",
    "position": 3,
    "name": "Classic White Tee",
    "item": "https://example.com/product/1"
  }]
}
```

### XML Sitemap Generation
```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next';
import { products } from './data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const productUrls = products.map(product => ({
    url: `https://example.com/product/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: 'https://example.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://example.com/products',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...productUrls
  ];
}
```

### robots.txt Optimization
```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /cart/
Disallow: /checkout/

Sitemap: https://example.com/sitemap.xml
Host: example.com
```

## On-Page SEO

### Dynamic Meta Tags
```typescript
// app/product/[id]/page.tsx
import { Metadata } from 'next';
import { products } from '../../data/products';

type Props = {
  params: { id: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find(p => p.id === params.id);
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} - StreetStyle`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.imageUrl],
      type: 'product',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.description,
      images: [product.imageUrl],
    },
  };
}
```

### Canonical URLs
```typescript
// app/components/CanonicalUrl.tsx
import Head from 'next/head';

interface CanonicalUrlProps {
  url: string;
}

export default function CanonicalUrl({ url }: CanonicalUrlProps) {
  return (
    <Head>
      <link rel="canonical" href={url} />
    </Head>
  );
}
```

### Internal Linking Strategy
- Link related products in product descriptions
- Create category pages with proper hierarchy
- Implement breadcrumb navigation
- Add "Frequently bought together" sections

## Content SEO

### Blog Implementation
```typescript
// app/blog/[slug]/page.tsx
export default function BlogPost({ params }: { params: { slug: string } }) {
  // Fetch blog post by slug
  return (
    <article>
      <h1>{post.title}</h1>
      <meta name="author" content={post.author} />
      <meta name="publish_date" property="og:publish_date" content={post.publishedAt} />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
```

### Keyword Research and Implementation
1. **Primary Keywords**:
   - "t-shirts"
   - "graphic tees"
   - "cotton t-shirts"
   - "men's t-shirts"
   - "women's t-shirts"

2. **Long-tail Keywords**:
   - "comfortable cotton t-shirts for summer"
   - "graphic tees with unique designs"
   - "premium quality basic t-shirts"

3. **LSI Keywords**:
   - "casual wear"
   - "fashion"
   - "apparel"
   - "clothing"

### Content Optimization Checklist
- [ ] Unique, valuable content for each product
- [ ] Proper heading structure (H1, H2, H3)
- [ ] Image alt text optimization
- [ ] Internal linking opportunities
- [ ] Keyword placement in first 100 words
- [ ] Content length > 300 words for product pages
- [ ] FAQ sections for common questions

## Performance Optimization

### Image Optimization
```typescript
// app/components/OptimizedImage.tsx
'use client';

import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function OptimizedImage({ src, alt, width, height }: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={85}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}
```

### Core Web Vitals Optimization
1. **Largest Contentful Paint (LCP)**:
   - Optimize hero image loading
   - Preload critical resources
   - Minimize server response times

2. **First Input Delay (FID)**:
   - Reduce JavaScript execution time
   - Implement code splitting
   - Optimize third-party scripts

3. **Cumulative Layout Shift (CLS)**:
   - Reserve space for images and videos
   - Avoid inserting content above existing content
   - Use transform animations instead of layout-changing properties

### Code Splitting
```typescript
// app/components/DynamicComponent.tsx
'use client';

import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function DynamicComponent() {
  return <HeavyComponent />;
}
```

## Analytics and Monitoring

### Google Analytics 4 Implementation
```typescript
// app/components/GoogleAnalytics.tsx
'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    // @ts-ignore
    gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }, [pathname, searchParams, GA_MEASUREMENT_ID]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
```

### SEO Audit Automation
```typescript
// scripts/seo-audit.js
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

async function runLighthouseAudit(url) {
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const options = {logLevel: 'info', output: 'html', onlyCategories: ['seo', 'performance']};
  const runnerResult = await lighthouse(url, options, undefined, chrome);
  
  // Process results
  console.log('SEO Score:', runnerResult.lhr.categories.seo.score * 100);
  console.log('Performance Score:', runnerResult.lhr.categories.performance.score * 100);
  
  await chrome.kill();
}

// Run audit for key pages
runLighthouseAudit('https://example.com');
runLighthouseAudit('https://example.com/products');
```

### Performance Monitoring
1. **Web Vitals Reporting**:
   - Implement Core Web Vitals tracking
   - Set up alerts for performance degradation
   - Monitor field data vs lab data

2. **SEO Monitoring Tools**:
   - Google Search Console integration
   - Rank tracking for target keywords
   - Backlink analysis
   - Competitor analysis

3. **Custom Dashboards**:
   - Create SEO performance dashboard
   - Track keyword rankings
   - Monitor organic traffic trends
   - Analyze conversion rates by traffic source

## SEO Best Practices Checklist

### Pre-Launch Checklist
- [ ] XML sitemap generated and submitted
- [ ] robots.txt optimized
- [ ] Structured data implemented and validated
- [ ] Meta tags optimized for all pages
- [ ] Canonical URLs implemented
- [ ] Internal linking strategy in place
- [ ] Mobile responsiveness tested
- [ ] Page speed optimized (Lighthouse score >90)
- [ ] Core Web Vitals metrics within good range
- [ ] Analytics and tracking implemented

### Ongoing Maintenance
- [ ] Regular content updates
- [ ] Broken link monitoring
- [ ] Keyword ranking tracking
- [ ] Technical SEO audits (quarterly)
- [ ] Performance monitoring
- [ ] Competitor analysis
- [ ] Backlink profile monitoring
- [ ] User experience improvements based on data

By implementing these SEO strategies, StreetStyle can achieve higher search engine rankings, increased organic traffic, and improved conversion rates.