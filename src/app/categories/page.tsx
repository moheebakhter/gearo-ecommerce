import Link from "next/link";

const categories = [
  {
    name: "Chairs",
    description: "Comfortable seating for work and living spaces.",
    products: "24 Products",
    image: "/Images/Chairs-1.png",
    slug: "chairs",
  },
  {
    name: "Desks",
    description: "Modern desks designed for productive workspaces.",
    products: "18 Products",
    image: "/Images/Desk.png",
    slug: "desks",
  },
  {
    name: "Tables",
    description: "Functional tables with timeless modern design.",
    products: "16 Products",
    image: "/Images/Tables.png",
    slug: "tables",
  },
  {
    name: "Storage",
    description: "Smart storage solutions for organized spaces.",
    products: "12 Products",
    image: "/Images/Storage.png",
    slug: "storage",
  },
  {
    name: "Office Equipment",
    description: "Essential equipment for modern offices.",
    products: "20 Products",
    image: "/Images/Equipment.png",
    slug: "office-equipment",
  },
  {
    name: "Lighting",
    description: "Lighting that completes your workspace.",
    products: "14 Products",
    image: "/Images/Lighting.png",
    slug: "lighting",
  },
];

export default function CategoriesPage() {
  return (
    <main className="categories-page">

      {/* HERO */}
      <section className="categories-hero">
        <div className="categories-hero-inner">
          <p className="categories-eyebrow">
            EXPLORE OUR COLLECTION
          </p>

          <h1>
            Find the right
            <br />
            fit for your space.
          </h1>

          <p className="categories-intro">
            Explore our collection of modern furniture and office
            equipment, carefully selected for comfortable and
            functional spaces.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories-content">

        <div className="categories-heading">
          <div>
            <p className="categories-small-title">
              SHOP BY CATEGORY
            </p>

            <h2>
              Designed for
              <br />
              everyday spaces.
            </h2>
          </div>

          <p className="categories-heading-text">
            From comfortable seating to practical storage,
            discover furniture designed to work beautifully
            in your space.
          </p>
        </div>

        <div className="categories-grid">

          {categories.map((category) => (
            <Link
              href={`/categories/${category.slug}`}
              className="category-item"
              key={category.slug}
            >
              <div className="category-item-image">
                <img
                  src={category.image}
                  alt={category.name}
                />
              </div>

              <div className="category-item-info">
                <div>
                  <p>{category.products}</p>
                  <h3>{category.name}</h3>
                </div>

                <span className="category-arrow">
                  →
                </span>
              </div>

              <p className="category-description">
                {category.description}
              </p>
            </Link>
          ))}

        </div>

      </section>

      {/* BOTTOM CTA */}
      <section className="categories-cta">

        <div className="categories-cta-inner">

          <div>
            <p className="categories-eyebrow">
              NEED HELP?
            </p>

            <h2>
              Not sure what
              <br />
              you need?
            </h2>
          </div>

          <div className="categories-cta-content">
            <p>
              Explore our complete collection or get in touch
              with our team for help finding the right furniture
              for your space.
            </p>

            <Link href="/contact" className="btn btn-dark">
              Contact Us
            </Link>
          </div>

        </div>

      </section>

    </main>
  );
}