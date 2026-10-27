import { useState, useMemo } from 'react';
import { PageHero } from '@/components/PageHero';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { BlogCard } from '@/components/Cards';
import { BookingCTA } from '@/components/BookingCTA';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { BLOG_POSTS } from '@/data/content';
import { IMAGES } from '@/data/images';
import { useDocumentTitle } from '@/hooks/useScrollToTop';
import { Search } from 'lucide-react';

export function Blog() {
  useDocumentTitle('Blog — Nowal Wisdom — Nowal NatureCare', 'Insights and stories on natural wellness, Ayurveda, yoga, mindful living, nutrition, and retreat planning.');

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = useMemo(() => ['All', ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))], []);

  const filtered = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = category === 'All' || post.category === category;
      const matchesSearch = !search ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <>
      <PageHero
        image={IMAGES.heroMeditation}
        title="Nowal Wisdom"
        subtitle="Reflections on natural wellness, mindful living, and the art of retreat."
        eyebrow="Blog"
      />
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Blog' }]} />

      {/* Search & Filters */}
      <section className="border-b border-sage-200 py-8">
        <div className="container-wide">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal-400" strokeWidth={1.5} />
              <input
                type="text"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setVisibleCount(6); }}
                placeholder="Search articles…"
                className="w-full rounded-full border border-sage-200 bg-white pl-11 pr-4 py-2.5 text-sm focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setCategory(cat); setVisibleCount(6); }}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    category === cat ? 'bg-forest text-ivory' : 'bg-white text-charcoal-400 hover:text-forest border border-sage-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          {visible.length === 0 ? (
            <p className="text-center text-charcoal-400 py-12">No articles found. Try a different search or category.</p>
          ) : (
            <>
              <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {visible.map((post) => (
                  <StaggerItem key={post.slug}>
                    <BlogCard post={post} />
                  </StaggerItem>
                ))}
              </StaggerGroup>
              {hasMore && (
                <div className="mt-12 text-center">
                  <button onClick={() => setVisibleCount((c) => c + 6)} className="btn-secondary">
                    Load More Articles
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <BookingCTA title="Inspired to Visit?" subtitle="Turn what you've read into an experience. Plan your retreat today." />
    </>
  );
}

export default Blog;
