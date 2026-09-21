import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="contact-page">

      {/* HERO */}

      <section className="contact-hero">
        <div className="contact-container">

          <p className="contact-label">CONTACT</p>

          <h1>
            Let&apos;s talk
            <br />
            about your space.
          </h1>

          <p className="contact-intro">
            Have a question about our products, your order, or
            anything else? Send us a message and we&apos;ll get back
            to you.
          </p>

        </div>
      </section>

      {/* CONTACT CONTENT */}

      <section className="contact-section">
        <div className="contact-container">

          <div className="contact-grid">

            {/* INFORMATION */}

            <div className="contact-info">

              <p className="contact-label">
                GET IN TOUCH
              </p>

              <h2>
                We&apos;re here
                <br />
                to help.
              </h2>

              <div className="contact-details">

                <div className="contact-detail">
                  <span>Email</span>
                  <a href="mailto:hello@gearo.com">
                    hello@gearo.com
                  </a>
                </div>

                <div className="contact-detail">
                  <span>Phone</span>
                  <a href="tel:+1234567890">
                    +1 234 567 890
                  </a>
                </div>

                <div className="contact-detail">
                  <span>Hours</span>
                  <p>
                    Monday — Friday
                    <br />
                    9:00 AM — 6:00 PM
                  </p>
                </div>

              </div>

            </div>

            {/* FORM */}

            <form className="contact-form">

              <div className="contact-two-columns">

                <div className="contact-field">
                  <label htmlFor="contact-name">
                    Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">
                    Email
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>

              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">
                  Subject
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">
                  Message
                </label>

                <textarea
                  id="contact-message"
                  placeholder="Write your message..."
                  rows={6}
                  required
                />
              </div>

              <button
                type="submit"
                className="contact-submit"
              >
                Send Message →
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="contact-cta">
        <div className="contact-container">

          <p className="contact-label">
            NEED SOMETHING?
          </p>

          <h2>
            Explore our
            <br />
            collection.
          </h2>

          <Link
            href="/shop"
            className="contact-cta-button"
          >
            Shop Products →
          </Link>

        </div>
      </section>

    </main>
  );
}