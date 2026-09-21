export default function AboutPage() {
  return (
    <main className="about-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="about-hero">
        <div className="about-hero-overlay"></div>

        <div className="about-container about-hero-content">

          <p className="about-label">
            ABOUT US
          </p>

          <h1>
            Furniture designed
            <br />
            for better spaces.
          </h1>

          <p className="about-intro">
            We create modern furniture and equipment that combine
            thoughtful design, everyday comfort and lasting quality.
          </p>

        </div>
      </section>


      {/* =========================
          OUR STORY
      ========================= */}

      <section className="about-story">

        <div className="about-container">

          <div className="about-story-grid">

            {/* LEFT */}

            <div className="about-story-heading">

              <p className="about-label">
                OUR STORY
              </p>

              <h2>
                Simple design.
                <br />
                Better living.
              </h2>

            </div>


            {/* RIGHT */}

            <div className="about-story-content">

              <p>
                GEARO was created with a simple idea: modern spaces
                should feel comfortable, functional and well designed.
              </p>

              <p>
                From workspaces to living areas, we carefully select
                products that bring together clean aesthetics,
                practical functionality and everyday comfort.
              </p>

            </div>

          </div>


          {/* STORY IMAGE */}

          <div className="about-story-image">

            <img
              src="/images/Our%20Story.png"
              alt="GEARO modern living and workspace"
            />

          </div>

        </div>

      </section>


      {/* =========================
          WHAT WE BELIEVE
      ========================= */}

      <section className="about-values">

        <div className="about-container">

          {/* IMAGE */}

          <div className="about-values-image">

            <img
              src="/images/What%20we%20believe.png"
              alt="GEARO furniture design"
            />

            <div className="about-values-image-content">

              <p className="about-label">
                WHAT WE BELIEVE
              </p>

              <h2>
                Designed with
                <br />
                purpose.
              </h2>

            </div>

          </div>


          {/* VALUES */}

          <div className="about-values-grid">

            <div className="about-value">

              <span>01</span>

              <h3>
                Quality
              </h3>

              <p>
                Products selected for dependable quality and
                everyday use.
              </p>

            </div>


            <div className="about-value">

              <span>02</span>

              <h3>
                Function
              </h3>

              <p>
                Practical designs that make modern spaces
                easier to live and work in.
              </p>

            </div>


            <div className="about-value">

              <span>03</span>

              <h3>
                Simplicity
              </h3>

              <p>
                Clean forms and timeless styles that fit naturally
                into contemporary interiors.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className="about-cta">

        <div className="about-container">

          <p className="about-label">
            EXPLORE GEARO
          </p>

          <h2>
            Find something
            <br />
            for your space.
          </h2>

          <a
            href="/shop"
            className="about-cta-button"
          >
            Shop Products →
          </a>

        </div>

      </section>

    </main>
  );
}