/**
 * SEO Optimization Utilities
 * Provides functions to manage meta tags and structured data for better search engine optimization
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

/**
 * Update document meta tags for SEO optimization
 */
export function updateSEOMeta(config: SEOConfig): void {
  // Update title
  document.title = config.title;

  // Update or create meta tags
  updateMetaTag('name', 'description', config.description);
  if (config.keywords) {
    updateMetaTag('name', 'keywords', config.keywords);
  }

  // Open Graph tags
  updateMetaTag('property', 'og:title', config.ogTitle || config.title);
  updateMetaTag('property', 'og:description', config.ogDescription || config.description);
  if (config.ogImage) {
    updateMetaTag('property', 'og:image', config.ogImage);
  }

  // Canonical URL
  if (config.canonicalUrl) {
    updateCanonicalLink(config.canonicalUrl);
  }
}

/**
 * Update or create a meta tag
 */
function updateMetaTag(attribute: string, attributeValue: string, content: string): void {
  let tag = document.querySelector(`meta[${attribute}="${attributeValue}"]`) as HTMLMetaElement;

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, attributeValue);
    document.head.appendChild(tag);
  }

  tag.content = content;
}

/**
 * Update or create canonical link
 */
function updateCanonicalLink(url: string): void {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;

  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }

  link.href = url;
}

/**
 * Add JSON-LD structured data to the page
 */
export function addStructuredData(data: Record<string, unknown>): void {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate product structured data
 */
export function generateProductSchema(product: {
  name: string;
  description: string;
  image: string;
  price?: string;
  currency?: string;
  rating?: number;
  reviewCount?: number;
}): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
  };

  if (product.price && product.currency) {
    schema.offers = {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: product.currency,
      availability: 'https://schema.org/InStock',
    };
  }

  if (product.rating && product.reviewCount) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    };
  }

  return schema;
}

/**
 * Generate FAQ structured data
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
