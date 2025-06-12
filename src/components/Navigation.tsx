import Link from "next/link";

export default function Navigation() {
  return (
    <header className="border-b border-gray-200 border-dark-border-subtle bg-dark-base">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold">
            Home
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/wishlist"
              className="text-sm font-medium hover:text-purple-600"
            >
              Wishlist
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
