import Link from "next/link";

const saleProducts = [
  {
    id: "1",
    name: "Modern Comfort Chair",
    price: "$199",
    oldPrice: "$249",
    image: "/Images/Chairs-1.png",
    category: "Chairs",
  },
  {
    id: "3",
    name: "Classic Lounge Chair",
    price: "$279",
    oldPrice: "$329",
    image: "/Images/Chairs.jpg",
    category: "Chairs",
  },
  {
    id: "2",
    name: "Minimal Oak Desk",
    price: "$349",
    oldPrice: "$399",
    image: "/Images/Desk.png",
    category: "Desks",
  },
  {
    id: "4",
    name: "Wooden Side Cabinet",
    price: "$229",
    oldPrice: "$279",
    image: "/Images/Tables.png",
    category: "Storage",
  },
];

export default function SalePage() {
  return (
    <main className="sale-page">

      {/* HERO */}

      <section className="sale-hero">
        <div className="sale-container">

          <p className="categories-eyebrow">
            SPECIAL OFFERS
          </p>

          <h1>Sale.</h1>

          <p>
            Discover selected furniture and equipment at
            special prices for a limited time.
          </p>

        </div>
      </section>

      {/* PRODUCTS */}

      <section className="sale-products">
        <div className="sale-container">

          <div className="sale-products-heading">

            <div>
              <p className="categories-small-title">
                {saleProducts.length} PRODUCTS
              </p>

              <h2>
                Selected pieces. Better prices.
              </h2>
            </div>

            <p>
              Explore our current offers and bring modern
              design into your space for less.
            </p>

          </div>

          <div className="sale-products-grid">

            {saleProducts.map((product) => (
              <Link
                href={`/product/${product.id}`}
                className="sale-product-card"
                key={product.id}
              >

                <div className="sale-product-image">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <span className="sale-badge">
                    SALE
                  </span>

                </div>

                <div className="sale-product-info">

                  <div>
                    <p>{product.category}</p>

                    <h3>{product.name}</h3>
                  </div>

                  <div className="sale-product-price">

                    <span className="sale-price">
                      {product.price}
                    </span>

                    <span className="sale-old-price">
                      {product.oldPrice}
                    </span>

                  </div>

                </div>

              </Link>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}