'use client';

export default function Newsletter() {
  return (
    <section className="container mx-auto px-6 py-16 text-center bg-primary text-white rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
      <p className="mb-8">Subscribe to our newsletter for the latest updates and health tips.</p>
      <form className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 w-full sm:w-auto border border-transparent rounded-lg focus:outline-none text-gray-900"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
