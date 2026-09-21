"use client";

import { useState } from "react";

export default function Home() {
  const [reviewSlide, setReviewSlide] = useState(0);

  const reviews = [
    {
      name: "Sarah",
      product: "Modern Comfort Chair",
      price: "$249.00",
      image: "/Images/Chairs.jpg",
      text: "I recently purchased a chair from this store, and it has completely transformed my workspace. The quality is outstanding, and the design fits perfectly with my style.",
    },
    {
      name: "Michael",
      product: "Minimal Oak Desk",
      price: "$399.00",
      image: "/Images/Desk.jpg",
      text: "I recently purchased a desk from this store, and I am extremely happy with the quality. It looks beautiful and feels perfect for my workspace.",
    },
    {
      name: "Jennifer",
      product: "Wooden Side Cabinet",
      price: "$279.00",
      image: "/Images/product-7.jpg",
      text: "The product quality exceeded my expectations. The design is modern, elegant, and fits perfectly in my room.",
    },
    {
      name: "David",
      product: "Executive Office Chair",
      price: "$449.00",
      image: "/Images/softchair.jpg",
      text: "Excellent quality and very comfortable. The chair looks professional and works perfectly in my office.",
    },
    {
      name: "Emma",
      product: "Modern Work Desk",
      price: "$499.00",
      image: "/Images/Duo standing desk.jpg",
      text: "Beautiful desk with a clean modern design. It gives my workspace a much more organized and premium look.",
    },
    {
      name: "James",
      product: "Oak Storage Unit",
      price: "$349.00",
      image: "/Images/Sottside seat.jpg",
      text: "The storage unit is exactly what I needed. Great design, good quality, and plenty of useful storage space.",
    },
  ];

  const reviewSlides = [
    reviews.slice(0, 3),
    reviews.slice(3, 6),
  ];

  return (
    <main>
      {/* Header */}
      {/* <header className="site-header">
        <div className="container header-inner">
          <a href="/" className="logo">
            GEARO
          </a>

          <nav className="main-nav">
            <a href="/">Home</a>
            <a href="/shop">Shop</a>
            <a href="/categories">Categories</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>

          <div className="header-actions">
            <button aria-label="Search">⌕</button>
            <button aria-label="Account">♙</button>
            <button aria-label="Cart">🛒</button>
          </div>
        </div>
      </header> */}

      {/* Hero */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <p className="eyebrow">MODERN FURNITURE COLLECTION</p>

            <h1>
              Create a space
              <br />
              you love.
            </h1>

            <p className="hero-description">
              Discover carefully selected furniture and office equipment
              designed to make your space comfortable, functional and
              beautiful.
            </p>

            <div className="hero-buttons">
              <a href="/shop" className="btn btn-dark">
                Shop Collection
              </a>

              <a href="/categories" className="btn btn-light">
                Explore Categories
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="/Images/Hero1.jpg"
              alt="Modern furniture"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SHOP BY CATEGORY</p>
              <h2>Find what fits your space.</h2>
            </div>

            <a href="/categories" className="view-all">
              View All →
            </a>
          </div>

          <div className="category-grid">
            <article className="category-card">
              <img
                src="/Images/Chairs.jpg"
                alt="Chairs"
              />
              <h3>Chairs</h3>
              <p>24 Products</p>
            </article>

            <article className="category-card">
              <img
                src="/Images/Laptop_stand.jpg"
                alt="Tables"
              />
              <h3>Tables</h3>
              <p>18 Products</p>
            </article>

            <article className="category-card">
              <img
                src="/Images/DoubleStanding.jpg"
                alt="Desks"
              />
              <h3>Desks</h3>
              <p>16 Products</p>
            </article>

            <article className="category-card">
              <img
                src="/Images/Mobile.jpg"
                alt="Storage"
              />
              <h3>Storage</h3>
              <p>12 Products</p>
            </article>
          </div>
        </div>
      </section>

     {/* Featured Products */}
<section className="products section">
  <div className="container">
    <div className="section-heading">
      <div>
        <p className="eyebrow">OUR PRODUCTS</p>
        <h2>Featured pieces.</h2>
      </div>

      <a href="/shop" className="view-all">
        Shop All →
      </a>
    </div>

    <div className="product-grid">

      {/* Product 1 */}
      <article className="product-card">
        <div className="product-image">
          <img
            src="/Images/Chairs.jpg"
            alt="Modern Comfort Chair"
          />
          <span className="sale-badge">SALE</span>
        </div>

        <div className="product-info">
          <p className="product-category">Office Chair</p>

          <h3>Modern Comfort Chair</h3>

          <div className="price">
            <span>$249</span>
            <del>$299</del>
          </div>
        </div>
      </article>


      {/* Product 2 */}
      <article className="product-card">
        <div className="product-image">
          <img
            src="/Images/Desk.jpg"
            alt="Minimal Oak Desk"
          />
        </div>

        <div className="product-info">
          <p className="product-category">Desk</p>

          <h3>Minimal Oak Desk</h3>

          <div className="price">
            <span>$399</span>
          </div>
        </div>
      </article>


      {/* Product 3 */}
      <article className="product-card">
        <div className="product-image">
          <img
            src="/Images/softchair.jpg"
            alt="Classic Lounge Chair"
          />
        </div>

        <div className="product-info">
          <p className="product-category">Chair</p>

          <h3>Classic Lounge Chair</h3>

          <div className="price">
            <span>$329</span>
          </div>
        </div>
      </article>


      {/* Product 4 */}
      <article className="product-card">
        <div className="product-image">
          <img
            src="/Images/product-7.jpg"
            alt="Wooden Side Cabinet"
          />
        </div>

        <div className="product-info">
          <p className="product-category">Storage</p>

          <h3>Wooden Side Cabinet</h3>

          <div className="price">
            <span>$279</span>
          </div>
        </div>
      </article>

    </div>
  </div>
</section>

{/* Promotional Banner */}
<section className="promo section">
  <div className="container">
    <div className="promo-box">

      <div>
        <p className="eyebrow">NEW COLLECTION</p>

        <h2>Designed for the way you work.</h2>

        <p>
          Upgrade your workspace with furniture that combines comfort,
          quality and modern design.
        </p>

        <a href="/shop" className="btn btn-dark">
          Discover Collection
        </a>
      </div>

      <div className="promo-image">
        <img
          src="/Images/Hero1.jpg"
          alt="Modern workspace furniture"
        />
      </div>

    </div>
  </div>
</section>

      {/* Newsletter */}
      <section className="newsletter section">
        <div className="container newsletter-inner">
          <p className="eyebrow">STAY UPDATED</p>

          <h2>Get inspired. Get notified.</h2>

          <p>
            Subscribe to receive new collection updates and special offers.
          </p>

          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
            />

            <button type="submit" className="btn btn-dark">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="customer-reviews">

        <div className="customer-reviews-header">
          <h2>Customer Review</h2>

          <p>
            Our customers adore our products, and we constantly aim to delight them.
          </p>
        </div>

        {/* REVIEW SLIDER */}
        <div className="reviews-slider">

          <div
            className="reviews-track"
            style={{
              transform: `translateX(-${reviewSlide * 50}%)`,
            }}
          >

            {reviewSlides.map((slide, slideIndex) => (
              <div
                className="reviews-slide"
                key={slideIndex}
              >

                {slide.map((review, reviewIndex) => (
                  <div
                    className="review-card"
                    key={`${review.name}-${reviewIndex}`}
                  >

                    {/* CUSTOMER */}
                    <div className="review-user">

                      <span className="review-name">
                        {review.name}
                      </span>

                      <span className="verified">
                        ✓
                      </span>

                      <span className="verified-text">
                        Verified purchase
                      </span>

                    </div>


                    {/* STARS */}
                    <div className="review-stars">
                      ★ ★ ★ ★ ★
                    </div>


                    {/* REVIEW TEXT */}
                    <p className="review-text">
                      "{review.text}"
                    </p>


                    {/* PRODUCT */}
                    <div className="review-product">

                      <div className="review-product-image">

                        <img
                          src={review.image}
                          alt={review.product}
                        />

                      </div>


                      <div className="review-product-info">

                        <h3>
                          {review.product}
                        </h3>

                        <p>
                          {review.price}
                        </p>

                      </div>

                    </div>

                  </div>
                ))}

              </div>
            ))}

          </div>

        </div>


        {/* CAROUSEL DOTS */}
        <div className="review-pagination">

          {reviewSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={reviewSlide === index ? "active" : ""}
              aria-label={`Review page ${index + 1}`}
              onClick={() => setReviewSlide(index)}
            />
          ))}

        </div>

      </section>

      {/* Footer */}
      {/* <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <a href="/" className="logo footer-logo">
              GEARO
            </a>

            <p className="footer-description">
              Modern furniture and equipment for better spaces.
            </p>
          </div>

          <div>
            <h4>Shop</h4>
            <a href="/shop">All Products</a>
            <a href="/categories">Categories</a>
            <a href="/shop/sale">Sale</a>
          </div>

          <div>
            <h4>Company</h4>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
            <a href="/faq">FAQ</a>
          </div>

          <div>
            <h4>Support</h4>
            <a href="/shipping">Shipping</a>
            <a href="/returns">Returns</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>© 2026 GEARO. All rights reserved.</p>
        </div>
      </footer> */}

    </main>
  );
}