import Link from "next/link";
import ProductGallery from "./ProductGallery";
import ProductOptions from "./ProductOptions";
import ProductActions from "./ProductActions";

const products = [
    {
        id: "1",
        name: "Modern Comfort Chair",
        category: "Office Chair",
        price: "$249",
        oldPrice: "$299",
        description:
            "A modern office chair designed to provide comfortable support throughout your working day. Its clean design fits naturally into contemporary workspaces.",
        image: "/Images/Chairs.jpg",
        gallery: [
            "/Images/Chairs.jpg",
            "/Images/softchair.jpg",
            "/Images/Sottside seat.jpg",
        ],
        sale: true,
    },

    {
        id: "2",
        name: "Minimal Oak Desk",
        category: "Desk",
        price: "$399",
        oldPrice: "",
        description:
            "A clean and functional oak desk designed for modern workspaces. Its minimal form gives you plenty of room to work while keeping your space organized.",
        image: "/Images/Desk.jpg",
        gallery: [
            "/Images/Desk.jpg",
            "/Images/Green_Desk.png",
            "/Images/Gray_Desk.jpg",
        ],
        sale: false,
    },

    {
        id: "3",
        name: "Classic Lounge Chair",
        category: "Chair",
        price: "$329",
        oldPrice: "",
        description:
            "A timeless lounge chair combining comfort and simple modern design. Perfect for living rooms, reading areas and relaxed spaces.",
        image: "/Images/softchair.jpg",
        gallery: [
            "/Images/softchair.jpg",
            "/Images/Chairs.jpg",
            "/Images/Sottside seat.jpg",
        ],
        sale: false,
    },

    {
        id: "4",
        name: "Wooden Side Cabinet",
        category: "Storage",
        price: "$279",
        oldPrice: "",
        description:
            "A versatile wooden cabinet providing practical storage while adding a warm modern touch to your interior.",
        image: "/Images/product-7.jpg",
        gallery: [
            "/Images/product-7.jpg",
            "/Images/product-7.1.jpg",
            "/Images/Laptop_stand.jpg",
        ],
        sale: false,
    },

    /* =====================================================
       OFFICE EQUIPMENT
    ===================================================== */

    {
        id: "9",
        name: "Modern Office Cabinet",
        category: "Office Equipment",
        price: "$289",
        oldPrice: "$329",
        description:
            "A practical office cabinet designed to keep documents, supplies and everyday essentials neatly organized while maintaining a clean professional workspace.",
        image: "/Images/Office equipement1.jpg",
        gallery: [
            "/Images/Office equipement1.jpg",
            "/Images/Office Equipement 2.jpg",
            "/Images/Office Equipement 3.jpg",
        ],
        sale: true,
    },

    {
        id: "10",
        name: "Professional Storage Unit",
        category: "Office Equipment",
        price: "$349",
        oldPrice: "",
        description:
            "A spacious storage unit created for modern offices, offering an organized solution for files, equipment and workspace essentials.",
        image: "/Images/Office Equipement 2.jpg",
        gallery: [
            "/Images/Office Equipement 2.jpg",
            "/Images/Office equipement1.jpg",
            "/Images/Office Equipement 4.jpg",
        ],
        sale: false,
    },

    {
        id: "11",
        name: "Executive Office Organizer",
        category: "Office Equipment",
        price: "$219",
        oldPrice: "",
        description:
            "A compact office organizer with a refined design that helps keep your workspace tidy, functional and visually clean throughout the day.",
        image: "/Images/Office Equipement 3.jpg",
        gallery: [
            "/Images/Office Equipement 3.jpg",
            "/Images/Office Equipement 4.jpg",
            "/Images/Office Equipement 2.jpg",
        ],
        sale: false,
    },

    {
        id: "12",
        name: "Contemporary Office Station",
        category: "Office Equipment",
        price: "$429",
        oldPrice: "$479",
        description:
            "A contemporary office solution designed to combine practical storage with a polished appearance, making it suitable for modern professional environments.",
        image: "/Images/Office Equipement 4.jpg",
        gallery: [
            "/Images/Office Equipement 4.jpg",
            "/Images/Office Equipement 3.jpg",
            "/Images/Office equipement1.jpg",
        ],
        sale: true,
    },

    /* =====================================================
       LIGHTING
    ===================================================== */

    {
        id: "13",
        name: "Modern Desk Lamp",
        category: "Lighting",
        price: "$129",
        oldPrice: "",
        description:
            "A sleek modern desk lamp designed to provide focused illumination while adding a refined contemporary touch to your workspace.",
        image: "/Images/Lighting1.jpg",
        gallery: [
            "/Images/Lighting1.jpg",
            "/Images/Lighting2.jpg",
            "/Images/Lighting3.jpg",
        ],
        sale: false,
    },

    {
        id: "14",
        name: "Minimal Floor Lamp",
        category: "Lighting",
        price: "$189",
        oldPrice: "$219",
        description:
            "A minimalist floor lamp with a clean silhouette that creates comfortable ambient lighting for offices, reading areas and modern interiors.",
        image: "/Images/Lighting2.jpg",
        gallery: [
            "/Images/Lighting2.jpg",
            "/Images/Lighting1.jpg",
            "/Images/Lighting4.jpg",
        ],
        sale: true,
    },

    {
        id: "15",
        name: "Contemporary Table Light",
        category: "Lighting",
        price: "$149",
        oldPrice: "",
        description:
            "A contemporary table light designed to bring soft, balanced illumination to desks, side tables and compact workspace environments.",
        image: "/Images/Lighting3.jpg",
        gallery: [
            "/Images/Lighting3.jpg",
            "/Images/Lighting4.jpg",
            "/Images/Lighting1.jpg",
        ],
        sale: false,
    },

    {
        id: "16",
        name: "Architectural Pendant Light",
        category: "Lighting",
        price: "$249",
        oldPrice: "$289",
        description:
            "An architectural pendant light featuring a refined modern form that adds character and practical illumination to contemporary spaces.",
        image: "/Images/Lighting4.jpg",
        gallery: [
            "/Images/Lighting4.jpg",
            "/Images/Lighting3.jpg",
            "/Images/Lighting2.jpg",
        ],
        sale: true,
    },
];

type ProductPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function ProductPage({
    params,
}: ProductPageProps) {
    const { id } = await params;

    const product =
        products.find((item) => item.id === id) ?? products[0];

    return (
        <main className="product-page">

            {/* BREADCRUMB */}

            <div className="product-breadcrumb">
                <div className="product-container">
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <Link href="/shop">Shop</Link>
                    <span>/</span>
                    <span>{product.name}</span>
                </div>
            </div>


            {/* PRODUCT */}

            <section className="product-detail">
                <div className="product-container product-detail-grid">

                    {/* PRODUCT GALLERY */}

                    <ProductGallery
                        images={product.gallery}
                        productName={product.name}
                        sale={product.sale}
                    />


                    {/* INFORMATION */}

                    <div className="product-detail-info">

                        <p className="product-detail-category">
                            {product.category}
                        </p>

                        <h1>{product.name}</h1>

                        <div className="product-detail-price">
                            <span>{product.price}</span>

                            {product.oldPrice && (
                                <del>{product.oldPrice}</del>
                            )}
                        </div>

                        <p className="product-detail-description">
                            {product.description}
                        </p>


                        {/* PRODUCT OPTIONS */}

                       <ProductOptions productId={product.id} />


                        {/* RATING */}

                        <div className="product-rating">
                            <span>★★★★★</span>
                            <p>4.8 (24 Reviews)</p>
                        </div>


                        {/* PRODUCT ACTIONS */}

                        <ProductActions
                            productId={product.id}
                            productName={product.name}
                            price={product.price}
                        />


                        {/* SHIPPING */}

                        <div className="product-benefits">

                            <div className="product-benefit">
                                <strong>Free Shipping</strong>
                                <span>On orders over $100</span>
                            </div>

                            <div className="product-benefit">
                                <strong>Easy Returns</strong>
                                <span>30-day return policy</span>
                            </div>

                            <div className="product-benefit">
                                <strong>Secure Payment</strong>
                                <span>Safe & secure checkout</span>
                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* PRODUCT INFORMATION */}

            <section className="product-information">
                <div className="product-container">

                    <div className="product-information-grid">

                        <div>

                            <p className="product-section-label">
                                PRODUCT DETAILS
                            </p>

                            <h2>
                                Designed for
                                <br />
                                everyday comfort.
                            </h2>

                        </div>


                        <div>

                            <p className="product-information-text">
                                {product.description}
                            </p>

                            <div className="product-specifications">

                                <div>
                                    <span>Material</span>
                                    <strong>Premium Materials</strong>
                                </div>

                                <div>
                                    <span>Style</span>
                                    <strong>Modern</strong>
                                </div>

                                <div>
                                    <span>Use</span>
                                    <strong>Indoor</strong>
                                </div>

                                <div>
                                    <span>Availability</span>
                                    <strong>In Stock</strong>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* RELATED PRODUCTS */}

            <section className="related-products">
                <div className="product-container">

                    <div className="related-heading">

                        <div>

                            <p className="product-section-label">
                                YOU MAY ALSO LIKE
                            </p>

                            <h2>Related products.</h2>

                        </div>

                        <Link href="/shop">
                            View All →
                        </Link>

                    </div>


                    <div className="related-grid">

                        {products
                            .filter((item) => item.id !== product.id)
                            .slice(0, 3)
                            .map((item) => (

                                <Link
                                    href={`/product/${item.id}`}
                                    className="related-card"
                                    key={item.id}
                                >

                                    <div className="related-image">

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                        />

                                    </div>

                                    <p>{item.category}</p>

                                    <h3>{item.name}</h3>

                                    <span>{item.price}</span>

                                </Link>

                            ))}

                    </div>

                </div>
            </section>

        </main>
    );
}