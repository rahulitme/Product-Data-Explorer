import Link from "next/link";

interface HeadingPageProps {
  params: { slug: string };
}

const mockCategories = Array.from({ length: 8 }).map((_, idx) => ({
  id: `category-${idx + 1}`,
  title: `Category ${idx + 1}`,
  slug: `category-${idx + 1}`,
  productCount: Math.floor(Math.random() * 100) + 10,
}));

export default function HeadingPage({ params }: HeadingPageProps) {
  const { slug } = params;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-brand-300">
          Navigation Heading
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">
          {slug.replace(/-/g, " ")}
        </h1>
        <p className="max-w-xl text-sm text-slate-300">
          Browse categories under this navigation heading. Categories will be
          scraped on-demand from World of Books.
        </p>
      </header>

      <section className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mockCategories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition-colors hover:border-brand-500/70 hover:bg-slate-900/90"
            >
              <h3 className="mb-2 text-lg font-semibold text-slate-100 group-hover:text-brand-400">
                {category.title}
              </h3>
              <p className="text-xs text-slate-400">
                {category.productCount} products
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
