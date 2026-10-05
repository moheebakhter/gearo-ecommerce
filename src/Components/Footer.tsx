// import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">

      <div className="container footer-grid">

        {/* BRAND */}

        <div className="footer-brand">
          <a href="/" className="logo footer-logo">
            GEARO
          </a>

          <p className="footer-description">
            Modern furniture and equipment for better spaces.
          </p>
        </div>


        {/* SHOP */}

        <div className="footer-column">

          {/* DESKTOP */}

          <div className="footer-desktop-content">
            <h4>Shop</h4>

            <a href="/shop">All Products</a>
            <a href="/categories">Categories</a>
            <a href="/sale">Sale</a>
          </div>

          {/* MOBILE ACCORDION */}

          <details className="footer-accordion">
            <summary>
              <span>Shop</span>
              <span className="footer-accordion-icon">+</span>
            </summary>

            <div className="footer-accordion-content">
              <a href="/shop">All Products</a>
              <a href="/categories">Categories</a>
              <a href="/sale">Sale</a>
            </div>
          </details>

        </div>


        {/* COMPANY */}

        <div className="footer-column">

          {/* DESKTOP */}

          <div className="footer-desktop-content">
            <h4>Company</h4>

            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
            <a href="/faq">FAQ</a>
          </div>

          {/* MOBILE ACCORDION */}

          <details className="footer-accordion">
            <summary>
              <span>Company</span>
              <span className="footer-accordion-icon">+</span>
            </summary>

            <div className="footer-accordion-content">
              <a href="/about">About Us</a>
              <a href="/contact">Contact</a>
              <a href="/faq">FAQ</a>
            </div>
          </details>

        </div>


        {/* SUPPORT */}

        <div className="footer-column">

          {/* DESKTOP */}

          <div className="footer-desktop-content">
            <h4>Support</h4>

            <a href="/shipping">Shipping</a>
            <a href="/returns">Returns</a>
            <a href="/privacy">Privacy Policy</a>
          </div>

          {/* MOBILE ACCORDION */}

          <details className="footer-accordion">
            <summary>
              <span>Support</span>
              <span className="footer-accordion-icon">+</span>
            </summary>

            <div className="footer-accordion-content">
              <a href="/shipping">Shipping</a>
              <a href="/returns">Returns</a>
              <a href="/privacy">Privacy Policy</a>
            </div>
          </details>

        </div>

      </div>


      {/* FOOTER BOTTOM */}

      <div className="container footer-bottom">
        <p>
          © {currentYear} GEARO. All rights reserved.
        </p>
      </div>

    </footer>
  );
}