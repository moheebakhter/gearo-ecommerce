import Link from "next/link";

const categories = [
  {
    slug: "chairs",
    name: "Chairs",
    description: "Comfortable seating for work and living spaces.",
    products: [
      {
        id: "1",
        name: "Modern Comfort Chair",
        price: "$249",
        image: "/images/products/chair-1.jpg",
      },
      {
        id: "3",
        name: "Classic Lounge Chair",
        price: "$329",
        image: "/images/products/chair-2.jpg",
      },
    ],
  },
  {
    slug: "desks",
    name: "Desks",
    description: "Modern desks designed for productive workspaces.",
    products: [
      {
        id: "2",
        name: "Minimal Oak Desk",
        price: "$399",
        image: "/images/products/desk-1.jpg",
      },
    ],
  },
  {
    slug: "tables",
    name: "Tables",
    description: "Functional tables with timeless modern design.",
    products: [],
  },
  {
    slug: "storage",
    name: "Storage",
    description: "Smart storage solutions for organized spaces.",
    products: [
      {
        id: "4",
        name: "Wooden Side Cabinet",
        price: "$279",
        image: "/images/products/cabinet-1.jpg",
      },
    ],
  },
  {
    slug: "office-equipment",
    name: "Office Equipment",
    description: "Essential equipment for modern offices.",
    products: [],
  },
  {
    slug: "lighting",
    name: "Lighting",
    description: "Lighting that completes your workspace.",
    products: [],
  },
];

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { slug } = await params;

  const category = categories.find(
    (item) => item.slug === slug
  );

  if (!category) {
    return (
      <main className="category-detail-page">
        <div className="category-detail-empty">
          <p className="categories-eyebrow">
            CATEGORY NOT FOUND
          </p>

          <h1>Sorry, this category doesn't exist.</h1>

          <Link href="/categories">
            ← Back to Categories
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="category-detail-page">

      {/* HERO */}

      <section className="category-detail-hero">
        <div className="category-detail-container">

          <Link
            href="/categories"
            className="category-back-link"
          >
            ← All Categories
          </Link>

          <p className="categories-eyebrow">
            SHOP BY CATEGORY
          </p>

          <h1>{category.name}</h1>

          <p>
            {category.description}
          </p>

        </div>
      </section>

      {/* PRODUCTS */}

      <section className="category-products">
        <div className="category-detail-container">

          <div className="category-products-heading">
            <div>
              <p className="categories-small-title">
                {category.products.length} PRODUCTS
              </p>

              <h2>
                {category.name} collection.
              </h2>
            </div>

            <p>
              Explore our selection of {category.name.toLowerCase()}
              designed for modern spaces.
            </p>
          </div>

          {category.products.length > 0 ? (

            <div className="category-products-grid">

              {category.products.map((product) => (
                <Link
                  href={`/product/${product.id}`}
                  className="category-product-card"
                  key={product.id}
                >

                  <div className="category-product-image">
                    <img
                      src={product.image}
                      alt={product.name}
                    />
                  </div>

                  <div className="category-product-info">

                    <div>
                      <p>{category.name}</p>

                      <h3>{product.name}</h3>
                    </div>

                    <span>
                      {product.price}
                    </span>

                  </div>

                </Link>
              ))}

            </div>

          ) : (

            <div className="category-no-products">

              <p>
                NEW COLLECTION
              </p>

              <h2>
                Products coming soon.
              </h2>

              <span>
                We're currently preparing products for this
                category.
              </span>

              <Link href="/shop">
                Browse All Products →
              </Link>

            </div>

          )}

        </div>
      </section>

    </main>
  );
}