import Link from "next/link";

interface CategoryPageProps {
  params: { slug: string };
  searchParams: { page?: string; limit?: string };
}

const mockProducts = Array.from({ length: 12 }).map((_, idx) => ({
  id: `product-${idx + 1}`,
  title: `Sample Book Title ${idx + 1}`,
  author: "Author Name",
  price: (4.99 + idx).toFixed(2),
  currency: "GBP",
  imageUrl: "https://via.placeholder.com/200x280.png?text=Book",
  slug: `sample-book-${idx + 1}`
}));

export default function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { slug } = params;
  const page = Number(searchParams.page ?? "1");
  const limit = Number(searchParams.limit ?? "12");

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-brand-300">
          Category
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">
          {slug.replace(/-/g, " ")}
        </h1>
        <p className="max-w-xl text-sm text-slate-300">
          This page will be powered by a paged product grid backed by on-demand scraping and caching
          for the selected category.
        </p>
      </header>

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-3 text-xs text-slate-400">
          <span>
            Showing page <span className="font-semibold text-slate-100">{page}</span>{" "}
            with limit <span className="font-semibold text-slate-100">{limit}</span>
          </span>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Live grid will support server-side pagination & caching
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {mockProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 hover:border-brand-500/70 hover:bg-slate-900/90 transition-colors"
            >
              <div className="aspect-[3/4] bg-slate-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1 px-3 py-3">
                <p className="line-clamp-2 text-xs font-semibold text-slate-100">
                  {product.title}
                </p>
                <p className="text-[11px] text-slate-400">{product.author}</p>
                <p className="mt-auto text-sm font-semibold text-brand-200">
                  {product.currency} {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

