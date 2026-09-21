import Link from "next/link";

export default function ShippingPage() {
  return (
    <main className="shipping-page">

      {/* HERO */}
      <section className="shipping-hero">
        <div className="shipping-container">

          <p className="shipping-eyebrow">
            CUSTOMER SUPPORT
          </p>

          <h1>
            Shipping
            <br />
            made simple.
          </h1>

          <p className="shipping-hero-text">
            Learn more about our shipping options, delivery times,
            and everything you need to know about receiving your order.
          </p>

        </div>
      </section>

      {/* OVERVIEW */}
      <section className="shipping-overview">
        <div className="shipping-container">

          <div className="shipping-section-heading">
            <div>
              <p className="shipping-eyebrow">
                SHIPPING INFORMATION
              </p>

              <h2>
                Everything you need
                <br />
                to know.
              </h2>
            </div>

            <p>
              We want your shopping experience to be simple from
              checkout to delivery. Here&apos;s what you can expect
              when ordering from GEARO.
            </p>
          </div>

          <div className="shipping-info-grid">

            <div className="shipping-info-card">
              <span>01</span>
              <h3>Order Processing</h3>
              <p>
                Orders are carefully prepared and processed before
                they are handed over to the delivery carrier.
              </p>
            </div>

            <div className="shipping-info-card">
              <span>02</span>
              <h3>Safe Delivery</h3>
              <p>
                Your order is packaged securely to help ensure that
                your products arrive safely and in good condition.
              </p>
            </div>

            <div className="shipping-info-card">
              <span>03</span>
              <h3>Order Updates</h3>
              <p>
                Once your order has been shipped, you can follow
                the delivery progress using the available tracking
                information.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* DELIVERY OPTIONS */}
      <section className="shipping-options">
        <div className="shipping-container">

          <div className="shipping-options-heading">
            <p className="shipping-eyebrow">
              DELIVERY OPTIONS
            </p>

            <h2>
              Choose the option
              <br />
              that works for you.
            </h2>
          </div>

          <div className="shipping-option-list">

            <div className="shipping-option">
              <div className="shipping-option-number">
                01
              </div>

              <div className="shipping-option-content">
                <h3>Standard Shipping</h3>
                <p>
                  A reliable delivery option for everyday orders.
                  Delivery time depends on your location and
                  destination.
                </p>
              </div>

              <div className="shipping-option-status">
                Available
              </div>
            </div>

            <div className="shipping-option">
              <div className="shipping-option-number">
                02
              </div>

              <div className="shipping-option-content">
                <h3>Express Shipping</h3>
                <p>
                  A faster delivery option may be available for
                  selected locations and products.
                </p>
              </div>

              <div className="shipping-option-status">
                Selected areas
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="shipping-process">
        <div className="shipping-container">

          <div className="shipping-process-heading">
            <p className="shipping-eyebrow">
              HOW IT WORKS
            </p>

            <h2>
              From checkout
              <br />
              to your door.
            </h2>
          </div>

          <div className="shipping-process-grid">

            <div className="shipping-process-item">
              <span>01</span>
              <h3>Place Your Order</h3>
              <p>
                Complete your purchase through our secure checkout
                process.
              </p>
            </div>

            <div className="shipping-process-item">
              <span>02</span>
              <h3>We Prepare It</h3>
              <p>
                Your products are checked, packed and prepared
                for shipment.
              </p>
            </div>

            <div className="shipping-process-item">
              <span>03</span>
              <h3>It&apos;s On The Way</h3>
              <p>
                Your order is handed to the delivery service and
                sent to your address.
              </p>
            </div>

            <div className="shipping-process-item">
              <span>04</span>
              <h3>Delivered</h3>
              <p>
                Receive your order and enjoy your new addition
                to your space.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* IMPORTANT INFORMATION */}
      <section className="shipping-notes">
        <div className="shipping-container">

          <div className="shipping-notes-grid">

            <div>
              <p className="shipping-eyebrow">
                IMPORTANT
              </p>

              <h2>
                A few things
                <br />
                to keep in mind.
              </h2>
            </div>

            <div className="shipping-notes-list">

              <div>
                <h3>Delivery Times</h3>
                <p>
                  Delivery times can vary depending on your
                  location, product availability and selected
                  shipping method.
                </p>
              </div>

              <div>
                <h3>Delivery Address</h3>
                <p>
                  Please make sure your shipping information is
                  accurate before completing your order.
                </p>
              </div>

              <div>
                <h3>Delays</h3>
                <p>
                  Unexpected carrier delays or circumstances outside
                  our control may occasionally affect delivery times.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="shipping-faq">
        <div className="shipping-container">

          <div className="shipping-faq-heading">
            <p className="shipping-eyebrow">
              SHIPPING FAQ
            </p>

            <h2>
              Common questions.
            </h2>
          </div>

          <div className="shipping-faq-list">

            <details>
              <summary>
                How long does shipping take?
                <span>+</span>
              </summary>

              <p>
                Delivery times depend on your location and the
                shipping method selected during checkout.
              </p>
            </details>

            <details>
              <summary>
                Can I track my order?
                <span>+</span>
              </summary>

              <p>
                When tracking information is available, it will be
                provided with your shipping confirmation.
              </p>
            </details>

            <details>
              <summary>
                Do you offer express shipping?
                <span>+</span>
              </summary>

              <p>
                Express delivery may be available for selected
                locations and products.
              </p>
            </details>

            <details>
              <summary>
                What if my order is delayed?
                <span>+</span>
              </summary>

              <p>
                If your order appears to be delayed, please contact
                our support team and we&apos;ll help you check its status.
              </p>
            </details>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="shipping-cta">
        <div className="shipping-container">

          <p className="shipping-eyebrow">
            NEED HELP?
          </p>

          <h2>
            Still have
            <br />
            questions?
          </h2>

          <p>
            Our team is here to help with shipping, orders and
            anything else you need.
          </p>

          <Link
            href="/contact"
            className="shipping-cta-button"
          >
            Contact Us →
          </Link>

        </div>
      </section>

    </main>
  );
}