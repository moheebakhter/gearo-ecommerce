"use client";

import Link from "next/link";
import { useMemo, useState } from "react";


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

const categories = [
  "All Products",
  "Chairs",
  "Tables",
  "Desks",
  "Storage",
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] =
    useState("All Products");

  const [sortOption, setSortOption] =
    useState("featured");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    /* CATEGORY FILTER */
    if (selectedCategory === "Chairs") {
      result = result.filter(
        (product) =>
          product.category === "Chair" ||
          product.category === "Office Chair"
      );
    }

    if (selectedCategory === "Tables") {
      result = result.filter(
        (product) =>
          product.category === "Table" ||
          product.name.toLowerCase().includes("table")
      );
    }

    if (selectedCategory === "Desks") {
      result = result.filter(
        (product) => product.category === "Desk"
      );
    }

    if (selectedCategory === "Storage") {
      result = result.filter(
        (product) => product.category === "Storage"
      );
    }

    /* SORTING */
    if (sortOption === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortOption === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategory, sortOption]);

  return (
    <main className="shop-page">

      {/* ========================================
          SHOP HERO
      ======================================== */}

      <section
        className="shop-hero"
        style={{
          backgroundImage: "url('/Images/Shop_banner.png')",
        }}
      >
        <div className="shop-hero-inner">

          <p className="shop-eyebrow">
            OUR COLLECTION
          </p>

          <h1>
            Shop furniture
            <br />
            for your space.
          </h1>

          <p className="shop-intro">
            Discover carefully selected furniture and office equipment
            designed for modern living and working spaces.
          </p>

        </div>
      </section>


      {/* ========================================
          SHOP CONTENT
      ======================================== */}

      <section className="shop-content">

        {/* ========================================
            TOOLBAR
        ======================================== */}

        <div className="shop-toolbar">

          {/* CATEGORIES */}

          <div className="shop-categories">

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  selectedCategory === category
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setSelectedCategory(category)
                }
              >
                {category}
              </button>
            ))}

          </div>


          {/* SORT */}

          <select
            className="sort-select"
            value={sortOption}
            onChange={(e) =>
              setSortOption(e.target.value)
            }
          >
            <option value="featured">
              Featured
            </option>

            <option value="price-low">
              Price: Low to High
            </option>

            <option value="price-high">
              Price: High to Low
            </option>
          </select>

        </div>


        {/* ========================================
            PRODUCTS
        ======================================== */}

        {filteredProducts.length > 0 ? (

          <div className="shop-grid">

            {filteredProducts.map((product) => (

              <Link
                href={`/product/${product.id}`}
                className="shop-product"
                key={product.id}
              >

                {/* PRODUCT IMAGE */}

                <div className="shop-product-image">

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


                {/* PRODUCT INFO */}

                <div className="shop-product-info">

                  <p className="product-category">
                    {product.category}
                  </p>

                  <h2>
                    {product.name}
                  </h2>

                  <div className="product-price">

                    <span>
                      ${product.price}
                    </span>

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

          /* NO PRODUCTS */

          <div className="no-products">
            <h3>No products found.</h3>

            <p>
              There are no products available in this category.
            </p>
          </div>

        )}

      </section>

    </main>
  );
}