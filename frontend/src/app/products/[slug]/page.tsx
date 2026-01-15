interface ProductPageProps {
  params: { slug: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 space-y-8">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-brand-300">
          Product Detail
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">
          {slug.replace(/-/g, " ")}
        </h1>
      </header>

      <section className="space-y-6">
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-8">
          <p className="text-slate-400">
            This page will display full product details including:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-slate-300">
            <li>Product description</li>
            <li>Author, publisher, publication date</li>
            <li>ISBN and other metadata</li>
            <li>User reviews and ratings</li>
            <li>Related/recommended products</li>
          </ul>
          <p className="mt-4 text-xs text-slate-500">
            Product data will be scraped on-demand from World of Books and
            cached for performance.
          </p>
        </div>
      </section>
    </div>
  );
}
