import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-wide pt-28 lg:pt-32">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-charcoal-400">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {item.to ? (
              <Link to={item.to} className="hover:text-forest transition-colors">{item.label}</Link>
            ) : (
              <span className="text-forest font-medium">{item.label}</span>
            )}
            {i < items.length - 1 && <ChevronRight className="h-3.5 w-3.5 text-sage-400" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}
