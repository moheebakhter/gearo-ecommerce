// import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    
      <footer className="site-footer">
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
            <a href="/sale">Sale</a>
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
      </footer>
  );
}