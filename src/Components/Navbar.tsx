"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">

        {/* LOGO */}
        <a href="/" className="logo">
          GEARO
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="main-nav">
          <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/shop" onClick={() => setMenuOpen(false)}>Shop</a>
          <a href="/categories" onClick={() => setMenuOpen(false)}>Categories</a>
          <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        {/* HEADER ACTIONS */}
        <div className="header-actions">
          <Link href="/search" aria-label="Search">
            ⌕
          </Link>

          <Link href="/account" aria-label="Account">
            ♙
          </Link>

          <Link href="/cart" aria-label="Cart">
            🛒
          </Link>

          {/* HAMBURGER */}

          {/* HAMBURGER */}
          <button
            type="button"
            className={`hamburger ${menuOpen ? "active" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      </div>

      {/* MOBILE / TABLET MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="/" onClick={() => setMenuOpen(false)}>
          Home
        </a>

        <a href="/shop" onClick={() => setMenuOpen(false)}>
          Shop
        </a>

        <a href="/categories" onClick={() => setMenuOpen(false)}>
          Categories
        </a>

        <a href="/about" onClick={() => setMenuOpen(false)}>
          About
        </a>

        <a href="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </div>
    </header>
  );
}