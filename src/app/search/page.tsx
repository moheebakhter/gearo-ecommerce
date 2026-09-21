export default function SearchPage() {
  return (
    <main className="simple-page">
      <section className="simple-page-content">
        <p className="simple-page-eyebrow">
          SEARCH
        </p>

        <h1>Search our collection.</h1>

        <p>
          Find furniture and office equipment for your space.
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
          />

          <button type="button">
            Search
          </button>
        </div>
      </section>
    </main>
  );
}