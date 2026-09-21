"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type CartItem = {
  productId: string;
  productName: string;
  price: string;
  quantity: number;
};

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    setLoaded(true);
  }, []);

  const getPrice = (price: string) => {
    return Number(price.replace("$", ""));
  };

  const subtotal = cart.reduce(
    (total, item) =>
      total + getPrice(item.price) * item.quantity,
    0
  );

  const shipping = subtotal >= 100 || subtotal === 0 ? 0 : 15;

  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);

    localStorage.removeItem("cart");
  };

  if (!loaded) {
    return null;
  }

  if (submitted) {
    return (
      <main className="checkout-page">
        <section className="checkout-success">
          <div className="checkout-container">
            <p className="checkout-label">
              ORDER CONFIRMED
            </p>

            <h1>
              Thank you for your order.
            </h1>

            <p>
              Your order has been successfully placed.
              We&apos;ll send your order details to your email.
            </p>

            <Link
              href="/shop"
              className="checkout-continue"
            >
              Continue Shopping →
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="checkout-page">

      {/* HEADER */}

      <section className="checkout-header">
        <div className="checkout-container">

          <p className="checkout-label">
            CHECKOUT
          </p>

          <h1>
            Complete your order.
          </h1>

          <p>
            Enter your information below to complete
            your purchase.
          </p>

        </div>
      </section>

      {/* CHECKOUT */}

      <section className="checkout-section">
        <div className="checkout-container">

          {cart.length === 0 ? (

            <div className="checkout-empty">

              <p className="checkout-label">
                YOUR CART IS EMPTY
              </p>

              <h2>
                Nothing to checkout.
              </h2>

              <Link
                href="/shop"
                className="checkout-continue"
              >
                Continue Shopping →
              </Link>

            </div>

          ) : (

            <div className="checkout-grid">

              {/* FORM */}

              <form
                className="checkout-form"
                onSubmit={handleSubmit}
              >

                <div className="checkout-form-section">

                  <p className="checkout-label">
                    CONTACT INFORMATION
                  </p>

                  <div className="checkout-field">
                    <label htmlFor="email">
                      Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                </div>

                <div className="checkout-form-section">

                  <p className="checkout-label">
                    SHIPPING INFORMATION
                  </p>

                  <div className="checkout-two-columns">

                    <div className="checkout-field">
                      <label htmlFor="firstName">
                        First Name
                      </label>

                      <input
                        id="firstName"
                        type="text"
                        placeholder="First name"
                        required
                      />
                    </div>

                    <div className="checkout-field">
                      <label htmlFor="lastName">
                        Last Name
                      </label>

                      <input
                        id="lastName"
                        type="text"
                        placeholder="Last name"
                        required
                      />
                    </div>

                  </div>

                  <div className="checkout-field">
                    <label htmlFor="address">
                      Address
                    </label>

                    <input
                      id="address"
                      type="text"
                      placeholder="Street address"
                      required
                    />
                  </div>

                  <div className="checkout-two-columns">

                    <div className="checkout-field">
                      <label htmlFor="city">
                        City
                      </label>

                      <input
                        id="city"
                        type="text"
                        placeholder="City"
                        required
                      />
                    </div>

                    <div className="checkout-field">
                      <label htmlFor="postalCode">
                        Postal Code
                      </label>

                      <input
                        id="postalCode"
                        type="text"
                        placeholder="Postal code"
                        required
                      />
                    </div>

                  </div>

                  <div className="checkout-field">
                    <label htmlFor="country">
                      Country
                    </label>

                    <select
                      id="country"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select country
                      </option>

                      <option value="Pakistan">
                        Pakistan
                      </option>

                      <option value="United States">
                        United States
                      </option>

                      <option value="United Kingdom">
                        United Kingdom
                      </option>

                      <option value="Canada">
                        Canada
                      </option>

                      <option value="Australia">
                        Australia
                      </option>
                    </select>
                  </div>

                </div>

                <div className="checkout-form-section">

                  <p className="checkout-label">
                    PAYMENT
                  </p>

                  <div className="checkout-payment-box">
                    <strong>
                      Cash on Delivery
                    </strong>

                    <span>
                      Payment will be collected when
                      your order is delivered.
                    </span>
                  </div>

                </div>

                <button
                  type="submit"
                  className="place-order-button"
                >
                  Place Order →
                </button>

              </form>

              {/* ORDER SUMMARY */}

              <aside className="checkout-summary">

                <p className="checkout-label">
                  YOUR ORDER
                </p>

                <h2>
                  Order summary.
                </h2>

                <div className="checkout-items">

                  {cart.map((item) => (

                    <div
                      className="checkout-item"
                      key={item.productId}
                    >

                      <div>
                        <strong>
                          {item.productName}
                        </strong>

                        <span>
                          Qty: {item.quantity}
                        </span>
                      </div>

                      <strong>
                        $
                        {(
                          getPrice(item.price) *
                          item.quantity
                        ).toFixed(2)}
                      </strong>

                    </div>

                  ))}

                </div>

                <div className="checkout-summary-row">
                  <span>Subtotal</span>

                  <strong>
                    ${subtotal.toFixed(2)}
                  </strong>
                </div>

                <div className="checkout-summary-row">
                  <span>Shipping</span>

                  <strong>
                    {shipping === 0
                      ? "Free"
                      : `$${shipping.toFixed(2)}`}
                  </strong>
                </div>

                <div className="checkout-total">
                  <span>Total</span>

                  <strong>
                    ${total.toFixed(2)}
                  </strong>
                </div>

                <p className="checkout-note">
                  Free shipping on orders over $100.
                </p>

              </aside>

            </div>

          )}

        </div>
      </section>

    </main>
  );
}