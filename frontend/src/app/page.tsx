import Link from "next/link";

const mockHeadings = [
  { slug: "books", title: "Books" },
  { slug: "categories", title: "Categories" },
  { slug: "childrens-books", title: "Children's Books" },
  { slug: "fiction", title: "Fiction" },
  { slug: "non-fiction", title: "Non-Fiction" },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          Product Data Explorer
        </h1>
        <p className="mx-auto max-w-2xl text-slate-400">
          Navigate through navigation headings, explore categories, and discover
          products from World of Books. All data is scraped on-demand with smart
          caching.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Navigation Headings</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mockHeadings.map((heading) => (
            <Link
              key={heading.slug}
              href={`/headings/${heading.slug}`}
              className="group rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition-colors hover:border-brand-500/70 hover:bg-slate-900/90"
            >
              <h3 className="mb-2 text-lg font-semibold text-slate-100 group-hover:text-brand-400">
                {heading.title}
              </h3>
              <p className="text-sm text-slate-400">
                Explore categories and products
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-slate-800 bg-slate-900/40 p-6">
        <p className="text-sm text-slate-400">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
          This is a demo page. In production, navigation headings will be
          fetched from the backend API and scraped from World of Books.
        </p>
      </section>
    </div>
  );
}
