import { Link } from 'react-router-dom';

type Crumb = { label: string; to?: string };

export function NncBreadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="nnc-breadcrumb bg-[#fbfaf3] px-4 py-3">
      <ol className="nnc-breadcrumb__list flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base text-[#2f3d36]">
        {items.map((item, i) => (
          <li key={item.label} className="nnc-breadcrumb__item flex items-center gap-2">
            {item.to ? (
              <Link to={item.to} className="nnc-breadcrumb__link text-[#2f7a46] transition-colors hover:text-[#0f4a2a]">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="nnc-breadcrumb__current font-medium text-[#14301f]">{item.label}</span>
            )}
            {i < items.length - 1 && <span aria-hidden className="nnc-breadcrumb__sep text-[#2f7a46]">&gt;&gt;</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}