

export default async function LandingPage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">
        Discogs <br className="hidden sm:block" />
        <span className="text-purple-600 dark:text-purple-400">wishlist</span>
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300">
        A way to shop for records through your wantlist.
      </p>
    </div>
  );
}
