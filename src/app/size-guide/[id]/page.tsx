import Link from "next/link";

type SizeGuidePageProps = {
    params: Promise<{
        id: string;
    }>;
};

type SizeGuide = {
    category: string;
    title: string;
    intro: string;
    banner: string;
    measurements: {
        label: string;
        value: string;
    }[];
    notes: string[];
};

const sizeGuides: Record<string, SizeGuide> = {

    /* =====================================================
       PRODUCT 1 — CHAIR
    ===================================================== */

    "1": {
        category: "Office Chair",
        title: "Modern Comfort Chair",
        intro:
            "A practical size guide to help you understand the dimensions and space requirements of the Modern Comfort Chair.",
        banner: "/Images/Chair-size-guide-banner.jpg",

        measurements: [
            { label: "Overall Width", value: "60–70 cm" },
            { label: "Overall Depth", value: "60–70 cm" },
            { label: "Overall Height", value: "90–115 cm" },
            { label: "Seat Height", value: "45–55 cm" },
        ],

        notes: [
            "Allow enough room behind the chair for comfortable movement.",
            "Make sure the chair can move freely without hitting nearby furniture.",
            "Always check the product dimensions before placing your order.",
        ],
    },


    /* =====================================================
       PRODUCT 2 — DESK
    ===================================================== */

    "2": {
        category: "Desk",
        title: "Minimal Oak Desk",
        intro:
            "Choose the right workspace setup by checking the recommended dimensions and clearance for your Minimal Oak Desk.",
        banner: "/Images/Desk-size-guide-banner.jpg",

        measurements: [
            { label: "Width", value: "120–160 cm" },
            { label: "Depth", value: "60–80 cm" },
            { label: "Height", value: "72–76 cm" },
            { label: "Chair Clearance", value: "90–120 cm" },
        ],

        notes: [
            "Leave enough space behind the desk for your chair.",
            "Allow comfortable walking space around the desk.",
            "Measure your available room before selecting the desk size.",
        ],
    },


    /* =====================================================
       PRODUCT 3 — LOUNGE CHAIR
    ===================================================== */

    "3": {
        category: "Chair",
        title: "Classic Lounge Chair",
        intro:
            "Use these recommended dimensions to make sure the Classic Lounge Chair fits comfortably into your room.",
        banner: "/Images/Lounge Chair-banner.jpg",

        measurements: [
            { label: "Overall Width", value: "70–85 cm" },
            { label: "Overall Depth", value: "75–85 cm" },
            { label: "Overall Height", value: "75–95 cm" },
            { label: "Seat Height", value: "40–48 cm" },
        ],

        notes: [
            "Leave open space around the chair for easy movement.",
            "Consider nearby tables and furniture when planning placement.",
            "Check the product dimensions before finalizing your space.",
        ],
    },


    /* =====================================================
       PRODUCT 4 — STORAGE
    ===================================================== */

    "4": {
        category: "Storage",
        title: "Wooden Side Cabinet",
        intro:
            "Check the recommended cabinet dimensions and surrounding clearance before placing the Wooden Side Cabinet in your space.",
        banner: "/Images/Cabinet.jpg",

        measurements: [
            { label: "Width", value: "40–80 cm" },
            { label: "Depth", value: "35–50 cm" },
            { label: "Height", value: "60–75 cm" },
            { label: "Front Clearance", value: "75–90 cm" },
        ],

        notes: [
            "Leave enough space in front of the cabinet for opening doors and drawers.",
            "Avoid placing the cabinet where it blocks walking paths.",
            "Measure the available wall or floor space before ordering.",
        ],
    },


    /* =====================================================
       PRODUCT 9 — OFFICE EQUIPMENT
    ===================================================== */

    "9": {
        category: "Office Equipment",
        title: "Executive Monitor Workstation",
        intro:
            "A dedicated sizing guide for the Executive Monitor Workstation, designed to help you plan your workspace comfortably.",
        banner: "/Images/Monitor Workstation.jpg",

        measurements: [
            { label: "Overall Width", value: "120–160 cm" },
            { label: "Overall Depth", value: "60–80 cm" },
            { label: "Overall Height", value: "72–76 cm" },
            { label: "Working Clearance", value: "90–120 cm" },
        ],

        notes: [
            "Leave enough space behind the workstation for comfortable movement.",
            "Keep monitor and equipment areas clear for everyday use.",
            "Measure your available workspace before installation.",
        ],
    },


    /* =====================================================
       PRODUCT 10 — OFFICE EQUIPMENT
    ===================================================== */

    "10": {
        category: "Office Equipment",
        title: "Modern Office Printer Station",
        intro:
            "Use these recommended dimensions to plan the placement of the Modern Office Printer Station.",
        banner: "/Images/Office-printer-banner.jpg",

        measurements: [
            { label: "Width", value: "70–100 cm" },
            { label: "Depth", value: "50–70 cm" },
            { label: "Height", value: "80–120 cm" },
            { label: "Front Clearance", value: "80–100 cm" },
        ],

        notes: [
            "Leave enough space around the printer for comfortable access.",
            "Keep paper and equipment areas easy to reach.",
            "Avoid placing the printer where it blocks walking paths.",
        ],
    },


    /* =====================================================
       PRODUCT 11 — OFFICE EQUIPMENT
    ===================================================== */

    "11": {
        category: "Office Equipment",
        title: "Professional Multifunction Printer",
        intro:
            "A dedicated sizing guide for the Professional Multifunction Printer to help you plan your office workspace.",
        banner: "/Images/Multifunction Copier.jpg",

        measurements: [
            { label: "Width", value: "60–90 cm" },
            { label: "Depth", value: "50–70 cm" },
            { label: "Height", value: "70–110 cm" },
            { label: "Recommended Clearance", value: "80–100 cm" },
        ],

        notes: [
            "Keep sufficient space around the printer for everyday operation.",
            "Allow room for paper trays and maintenance access.",
            "Check the actual product dimensions before placement.",
        ],
    },


    /* =====================================================
       PRODUCT 12 — OFFICE EQUIPMENT
    ===================================================== */

    "12": {
        category: "Office Equipment",
        title: "Compact Laser Printer",
        intro:
            "Plan your workspace around the Compact Laser Printer using these recommended dimensions and clearance guidelines.",
        banner: "/Images/Laser Printer.jpg",

        measurements: [
            { label: "Width", value: "40–60 cm" },
            { label: "Depth", value: "35–50 cm" },
            { label: "Height", value: "35–55 cm" },
            { label: "Recommended Clearance", value: "50–70 cm" },
        ],

        notes: [
            "Place the printer on a stable and level surface.",
            "Leave enough space for paper loading and maintenance.",
            "Keep cables and surrounding areas organized.",
        ],
    },


    /* =====================================================
       PRODUCT 13 — LIGHTING
    ===================================================== */

    "13": {
        category: "Lighting",
        title: "Modern Desk Lamp",
        intro:
            "Use these recommended dimensions to position the Modern Desk Lamp comfortably on your workspace.",
        banner: "/Images/Desk Lamp.jpg",

        measurements: [
            { label: "Base Width", value: "15–25 cm" },
            { label: "Base Depth", value: "15–25 cm" },
            { label: "Overall Height", value: "35–55 cm" },
            { label: "Recommended Desk Space", value: "30–40 cm" },
        ],

        notes: [
            "Keep the lamp stable on a flat surface.",
            "Leave enough desk space around the lamp for everyday work.",
            "Position the light to avoid unnecessary glare.",
        ],
    },


    /* =====================================================
       PRODUCT 14 — LIGHTING
    ===================================================== */

    "14": {
        category: "Lighting",
        title: "Minimal Floor Lamp",
        intro:
            "Plan the placement of the Minimal Floor Lamp with enough surrounding space for comfortable movement.",
        banner: "/Images/Floor Lamp.jpg",

        measurements: [
            { label: "Base Width", value: "25–35 cm" },
            { label: "Base Depth", value: "25–35 cm" },
            { label: "Overall Height", value: "140–180 cm" },
            { label: "Recommended Clearance", value: "60–90 cm" },
        ],

        notes: [
            "Keep the base positioned away from main walking paths.",
            "Allow enough space around the lamp for safe movement.",
            "Check the product dimensions before selecting its location.",
        ],
    },


    /* =====================================================
       PRODUCT 15 — LIGHTING
    ===================================================== */

    "15": {
        category: "Lighting",
        title: "Contemporary Table Light",
        intro:
            "A dedicated sizing guide for the Contemporary Table Light, suitable for desks, side tables and compact spaces.",
        banner: "/Images/Table Light.jpg",

        measurements: [
            { label: "Base Width", value: "15–25 cm" },
            { label: "Base Depth", value: "15–25 cm" },
            { label: "Overall Height", value: "30–50 cm" },
            { label: "Recommended Surface", value: "30–40 cm" },
        ],

        notes: [
            "Place the light on a stable and level surface.",
            "Leave sufficient space around the base.",
            "Keep the light positioned away from areas with heavy traffic.",
        ],
    },


    /* =====================================================
       PRODUCT 16 — LIGHTING
    ===================================================== */

    "16": {
        category: "Lighting",
        title: "Architectural Pendant Light",
        intro:
            "Use this guide to plan the placement and clearance required for the Architectural Pendant Light.",
        banner: "/Images/Pendant Light.jpg",

        measurements: [
            { label: "Shade Diameter", value: "35–55 cm" },
            { label: "Overall Height", value: "120–180 cm" },
            { label: "Recommended Table Height", value: "70–80 cm" },
            { label: "Floor Clearance", value: "180–220 cm" },
        ],

        notes: [
            "Position the pendant at a comfortable height above furniture.",
            "Make sure the light does not interfere with movement.",
            "Check the actual product dimensions before installation.",
        ],
    },
};


export default async function SizeGuidePage({
    params,
}: SizeGuidePageProps) {

    const { id } = await params;

    const guide = sizeGuides[id];

    if (!guide) {
        return (
            <main className="size-guide-page">

                <section className="size-guide-hero">

                    <div className="size-guide-container">

                        <p className="size-guide-label">
                            PRODUCT SUPPORT
                        </p>

                        <h1>
                            Size guide
                            <br />
                            not found.
                        </h1>

                        <p className="size-guide-intro">
                            We could not find a size guide for this product.
                        </p>

                        <Link
                            href="/shop"
                            className="size-guide-button"
                        >
                            Back to Shop →
                        </Link>

                    </div>

                </section>

            </main>
        );
    }


    return (
        <main className="size-guide-page">

            {/* =====================================================
                HERO BANNER
            ===================================================== */}

            <section
                className="size-guide-hero"
                style={{
                    backgroundImage: `
                        linear-gradient(
                            90deg,
                            rgba(238, 236, 231, 0.96) 0%,
                            rgba(238, 236, 231, 0.82) 30%,
                            rgba(238, 236, 231, 0.45) 55%,
                            rgba(238, 236, 231, 0.12) 80%,
                            rgba(238, 236, 231, 0) 100%
                        ),
                        url("${guide.banner}")
                    `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >

                <div className="size-guide-container">

                    <p className="size-guide-label">
                        {guide.category}
                    </p>

                    <h1>
                        Find the right
                        <br />
                        size for your space.
                    </h1>

                    <p className="size-guide-intro">
                        {guide.intro}
                    </p>

                </div>

            </section>


            {/* =====================================================
                CONTENT
            ===================================================== */}

            <section className="size-guide-content">

                <div className="size-guide-container">

                    <div className="size-guide-heading">

                        <div>

                            <p className="size-guide-label">
                                SIZE GUIDE
                            </p>

                            <h2>
                                {guide.title}
                                <br />
                                dimensions.
                            </h2>

                        </div>

                        <p>
                            Check the measurements below before placing
                            your order to make sure the product fits
                            comfortably into your available space.
                        </p>

                    </div>


                    {/* =================================================
                        PRODUCT DIMENSIONS
                    ================================================= */}

                    <div className="size-guide-section">

                        <div className="size-guide-section-heading">

                            <div>

                                <span>
                                    01
                                </span>

                                <h3>
                                    Product Dimensions
                                </h3>

                            </div>

                            <p>
                                Recommended measurements for this product.
                            </p>

                        </div>


                        <div className="size-guide-table">

                            <div className="size-guide-table-header">

                                <span>
                                    Measurement
                                </span>

                                <span>
                                    Recommended Size
                                </span>

                            </div>


                            {guide.measurements.map((item) => (

                                <div
                                    className="size-guide-row"
                                    key={item.label}
                                >

                                    <strong>
                                        {item.label}
                                    </strong>

                                    <span>
                                        {item.value}
                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>


                    {/* =================================================
                        SPACE PLANNING
                    ================================================= */}

                    <div className="size-guide-section">

                        <div className="size-guide-section-heading">

                            <div>

                                <span>
                                    02
                                </span>

                                <h3>
                                    Space Planning
                                </h3>

                            </div>

                            <p>
                                Keep these points in mind when planning
                                the product in your space.
                            </p>

                        </div>


                        <div className="size-guide-planning">

                            {guide.notes.map((note, index) => (

                                <div key={index}>

                                    <strong>
                                        {index === 0
                                            ? "Placement"
                                            : index === 1
                                                ? "Clearance"
                                                : "Important"}
                                    </strong>

                                    <p>
                                        {note}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>


                    {/* =================================================
                        IMPORTANT NOTE
                    ================================================= */}

                    <div className="size-guide-note">

                        <div>

                            <span>
                                PLEASE NOTE
                            </span>

                            <h3>
                                Always check the
                                <br />
                                product dimensions.
                            </h3>

                        </div>

                        <p>
                            Product dimensions can vary depending on the
                            specific design. Please check the dimensions
                            shown on the individual product page before
                            placing your order.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CTA
            ===================================================== */}

           <section className="size-guide-cta">
    <div className="size-guide-container">

        <div className="size-guide-cta-grid">

            {/* LEFT CONTENT */}

            <div className="size-guide-cta-content">

                <p className="size-guide-label">
                    STILL NOT SURE?
                </p>

                <h2>
                    Need help choosing
                    <br />
                    the right size?
                </h2>

                <Link
                    href="/contact"
                    className="size-guide-button"
                >
                    Contact Us →
                </Link>

            </div>


            {/* RIGHT IMAGE */}

            <div className="size-guide-cta-image">

                <img
                    src="/Images/Size guide cta banner.jpg"
                    alt="GEARO furniture workspace"
                />

            </div>

        </div>

    </div>
</section>

        </main>
    );
}