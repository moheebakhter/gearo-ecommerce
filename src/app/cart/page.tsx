"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type CartItem = {
  productId: string;
  productName: string;
  price: string;
  quantity: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, loaded]);

  const getPrice = (price: string) => {
    return Number(price.replace("$", ""));
  };

  const increaseQuantity = (productId: string) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.productId === productId
          ? {
            ...item,
            quantity: item.quantity + 1,
          }
          : item
      )
    );
  };

  const decreaseQuantity = (productId: string) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.productId === productId
            ? {
              ...item,
              quantity: Math.max(1, item.quantity - 1),
            }
            : item
        )
    );
  };

  const removeItem = (productId: string) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.productId !== productId
      )
    );
  };

  const subtotal = cart.reduce(
    (total, item) =>
      total + getPrice(item.price) * item.quantity,
    0
  );

  const shipping = subtotal >= 100 || subtotal === 0 ? 0 : 15;

  const total = subtotal + shipping;

  if (!loaded) {
    return null;
  }

  return (
    <main className="cart-page">

      {/* HEADER */}

      <section className="cart-header">
        <div className="cart-container">
          <p className="cart-label">YOUR CART</p>

          <h1>
            Shopping cart.
          </h1>

          <p className="cart-description">
            Review your selected products before checkout.
          </p>
        </div>
      </section>

      {/* CART */}

      <section className="cart-section">
        <div className="cart-container">

          {cart.length === 0 ? (

            /* EMPTY CART */

            <div className="empty-cart">

              <p className="cart-label">
                YOUR CART IS EMPTY
              </p>

              <h2>
                Nothing here yet.
              </h2>

              <p>
                Browse our collection and find something
                for your space.
              </p>

              <Link
                href="/shop"
                className="continue-shopping"
              >
                Continue Shopping →
              </Link>

            </div>

          ) : (

            <div className="cart-grid">

              {/* PRODUCTS */}

              <div className="cart-products">

                {cart.map((item) => (

                  <div
                    className="cart-item"
                    key={item.productId}
                  >

                    <div className="cart-item-image">
                      <span>
                        Product
                      </span>
                    </div>

                    <div className="cart-item-info">

                      <p>
                        Product
                      </p>

                      <h3>
                        {item.productName}
                      </h3>

                      <span>
                        {item.price}
                      </span>

                    </div>

                    <div className="cart-item-actions">

                      <div className="cart-quantity">

                        <button
                          type="button"
                          onClick={() =>
                            decreaseQuantity(item.productId)
                          }
                        >
                          −
                        </button>

                        <span>
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            increaseQuantity(item.productId)
                          }
                        >
                          +
                        </button>

                      </div>

                      <strong>
                        $
                        {(
                          getPrice(item.price) *
                          item.quantity
                        ).toFixed(2)}
                      </strong>

                      <button
                        type="button"
                        className="remove-item"
                        onClick={() =>
                          removeItem(item.productId)
                        }
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                ))}

                <Link
                  href="/shop"
                  className="continue-shopping"
                >
                  ← Continue Shopping
                </Link>

              </div>

              {/* SUMMARY */}

              <aside className="cart-summary">

                <p className="cart-label">
                  ORDER SUMMARY
                </p>

                <h2>
                  Your order.
                </h2>

                <div className="summary-row">
                  <span>Subtotal</span>

                  <strong>
                    ${subtotal.toFixed(2)}
                  </strong>
                </div>

                <div className="summary-row">
                  <span>Shipping</span>

                  <strong>
                    {shipping === 0
                      ? "Free"
                      : `$${shipping.toFixed(2)}`}
                  </strong>
                </div>

                <div className="summary-total">
                  <span>Total</span>

                  <strong>
                    ${total.toFixed(2)}
                  </strong>
                </div>

                <Link
                  href="/checkout"
                  className="checkout-button"
                >
                  Checkout →
                </Link>

                <p className="shipping-note">
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