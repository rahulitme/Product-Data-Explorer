export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <header className="mb-8">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">About</h1>
        <p className="text-slate-400">
          Product Data Explorer - Full-Stack Assignment
        </p>
      </header>

      <section className="space-y-6 text-slate-300">
        <div>
          <h2 className="mb-3 text-xl font-semibold text-slate-100">Project Overview</h2>
          <p>
            This is a production-minded product exploration platform that lets
            users navigate from high-level headings → categories → products →
            product detail pages powered by live, on-demand scraping.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-slate-100">Technologies</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Frontend:</strong> Next.js 15 (App Router), React, TypeScript, Tailwind CSS
            </li>
            <li>
              <strong>Backend:</strong> NestJS, TypeScript, PostgreSQL/MongoDB
            </li>
            <li>
              <strong>Scraping:</strong> Crawlee + Playwright
            </li>
            <li>
              <strong>Target Site:</strong> World of Books (https://www.worldofbooks.com/)
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-slate-100">Features</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>On-demand web scraping with caching</li>
            <li>Responsive design (desktop & mobile)</li>
            <li>Accessible UI (WCAG AA basics)</li>
            <li>Client-side data fetching (SWR/React Query)</li>
            <li>Browsing history persistence</li>
            <li>Rate limiting and ethical scraping practices</li>
          </ul>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
          <h3 className="mb-2 font-semibold text-slate-100">Status</h3>
          <p className="text-sm text-slate-400">
            This project is currently in development. Backend API endpoints and
            scraping functionality are being implemented.
          </p>
        </div>
      </section>
    </div>
  );
}
