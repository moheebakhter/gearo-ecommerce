"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const products = [
  {
    id: 1,
    name: "Modern Comfort Chair",
    category: "Office Chair",
    price: 249,
    oldPrice: 299,
    image: "/Images/Chairs.jpg",
    sale: true,
  },
  {
    id: 2,
    name: "Minimal Oak Desk",
    category: "Desk",
    price: 399,
    oldPrice: 0,
    image: "/Images/Desk.jpg",
    sale: false,
  },
  {
    id: 3,
    name: "Classic Lounge Chair",
    category: "Chair",
    price: 329,
    oldPrice: 0,
    image: "/Images/softchair.jpg",
    sale: false,
  },
  {
    id: 4,
    name: "Wooden Side Cabinet",
    category: "Storage",
    price: 279,
    oldPrice: 0,
    image: "/Images/product-7.jpg",
    sale: false,
  },
  {
    id: 5,
    name: "Executive Office Chair",
    category: "Office Chair",
    price: 449,
    oldPrice: 0,
    image: "/Images/Hero.jpg",
    sale: false,
  },
  {
    id: 6,
    name: "Modern Work Desk",
    category: "Desk",
    price: 499,
    oldPrice: 0,
    image: "/Images/DoubleStanding.jpg",
    sale: false,
  },
  {
    id: 7,
    name: "Oak Storage Unit",
    category: "Storage",
    price: 349,
    oldPrice: 0,
    image: "/Images/product-7.1.jpg",
    sale: false,
  },
  {
    id: 8,
    name: "Classic Dining Chair",
    category: "Chair",
    price: 199,
    oldPrice: 0,
    image: "/Images/Sottside seat.jpg",
    sale: false,
  },
];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searched, setSearched] = useState(false);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const searchResults = normalizedQuery
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(normalizedQuery) ||
          product.category.toLowerCase().includes(normalizedQuery)
      )
    : products;

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearched(true);
  };

  return (
    <main className="simple-page">
      <section className="simple-page-content">

        <p className="simple-page-eyebrow">
          SEARCH
        </p>

        <h1>
          Search our collection.
        </h1>

        <p>
          Find furniture and office equipment for your space.
        </p>

        <form
          className="search-box"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(event) =>
              setSearchQuery(event.target.value)
            }
            placeholder="Search products..."
            aria-label="Search products"
          />

          <button type="submit">
            Search
          </button>
        </form>

        {searched && (
          <section className="search-results">

            <p>
              {searchResults.length}{" "}
              {searchResults.length === 1
                ? "product"
                : "products"}{" "}
              found
              {normalizedQuery
                ? ` for "${searchQuery.trim()}"`
                : ""}
              .
            </p>

            {searchResults.length > 0 ? (

              <div className="search-results-grid">

                {searchResults.map((product) => (

                  <Link
                    href={`/product/${product.id}`}
                    className="search-result-card"
                    key={product.id}
                  >

                    <div className="search-result-image">

                      {product.sale && (
                        <span className="sale-badge">
                          SALE
                        </span>
                      )}

                      <img
                        src={product.image}
                        alt={product.name}
                      />

                    </div>

                    <div className="search-result-info">

                      <span>
                        {product.category}
                      </span>

                      <h2>
                        {product.name}
                      </h2>

                      <div>
                        <strong>
                          ${product.price}
                        </strong>

                        {product.oldPrice > 0 && (
                          <del>
                            ${product.oldPrice}
                          </del>
                        )}
                      </div>

                    </div>

                  </Link>

                ))}

              </div>

            ) : (

              <div className="no-search-results">

                <h3>
                  No products found.
                </h3>

                <p>
                  Try searching for a chair, desk,
                  or storage product.
                </p>

              </div>

            )}

          </section>
        )}

      </section>
    </main>
  );
}