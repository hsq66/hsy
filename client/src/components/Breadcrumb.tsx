import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

/**
 * Breadcrumb Navigation Component
 * Displays navigation hierarchy for improved UX and SEO
 * Uses structured data (BreadcrumbList schema) for search engines
 */
export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <>
      {/* Breadcrumb Navigation */}
      <nav className="bg-white border-b border-gray-200 py-3">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            {items.map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                )}
                {index === items.length - 1 ? (
                  <span className="text-gray-600 font-medium">{item.label}</span>
                ) : (
                  <Link href={item.href}>
                    <a className="text-red-600 hover:text-red-700 transition-colors">
                      {item.label}
                    </a>
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* JSON-LD Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: `https://hongshengyuan.tech${item.href}`,
          })),
        })}
      </script>
    </>
  );
}
