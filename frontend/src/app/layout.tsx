import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Product Data Explorer",
  description: "Explore products from World of Books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <header className="border-b border-slate-800 bg-slate-900/50">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <nav className="flex items-center justify-between">
              <a href="/" className="text-lg font-semibold text-brand-400">
                Product Data Explorer
              </a>
              <div className="flex gap-4 text-sm">
                <a href="/about" className="text-slate-400 hover:text-slate-100">
                  About
                </a>
              </div>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-auto border-t border-slate-800 bg-slate-900/50">
          <div className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-slate-400">
            <p>Product Data Explorer - Powered by World of Books</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
