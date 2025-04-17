import { Link, Outlet } from "react-router-dom";
import { Button } from "@repo/ui/button";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            Fab Design Tokens
          </Link>
          <nav className="flex gap-6">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <Link to="/tokens" className="hover:text-primary">
              Tokens
            </Link>
            <Link to="/components" className="hover:text-primary">
              Components
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Outlet />
        </div>
      </main>
      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          © 2024 Fab Design Tokens. A practical case study for a multi-platform design token system.
        </div>
      </footer>
    </div>
  );
} 