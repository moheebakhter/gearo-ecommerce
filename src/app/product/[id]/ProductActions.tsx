"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type ProductActionsProps = {
  productId: string;
  productName: string;
  price: string;
};

export default function ProductActions({
  productId,
  productName,
  price,
}: ProductActionsProps) {
  const router = useRouter();

  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  const addToCart = () => {
    const existingCart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    const existingProduct = existingCart.find(
      (item: { productId: string }) => item.productId === productId
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = existingCart.map(
        (item: {
          productId: string;
          productName: string;
          price: string;
          quantity: number;
        }) =>
          item.productId === productId
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          productId,
          productName,
          price,
          quantity,
        },
      ];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    alert(`${productName} added to cart`);
  };

  const buyNow = () => {
    addToCart();
    router.push("/cart");
  };

  return (
    <>
      {/* QUANTITY */}

      <div className="quantity-section">
        <p>Quantity</p>

        <div className="quantity-selector">
          <button
            type="button"
            onClick={decreaseQuantity}
            aria-label="Decrease quantity"
          >
            −
          </button>

          <span>{quantity}</span>

          <button
            type="button"
            onClick={increaseQuantity}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      {/* ACTIONS */}

      <div className="product-actions">
        <button
          type="button"
          className="product-add-cart"
          onClick={addToCart}
        >
          Add to Cart
        </button>

        <button
          type="button"
          className="product-buy-now"
          onClick={buyNow}
        >
          Buy Now
        </button>
      </div>
    </>
  );
}