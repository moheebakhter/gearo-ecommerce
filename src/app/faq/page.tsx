"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit and debit cards. Payment options available to you will be shown during checkout.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Orders are typically processed within 1–3 business days. Delivery time depends on your location and shipping method.",
  },
  {
    question: "Can I return my order?",
    answer:
      "Yes. Eligible items can be returned within 30 days of delivery, provided they are unused and in their original condition.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order has shipped, we will send tracking information to the email address used during checkout.",
  },
  {
    question: "Can I cancel my order?",
    answer:
      "You can request cancellation before your order has been shipped. Contact our support team as soon as possible.",
  },
  {
    question: "Do you offer assembly services?",
    answer:
      "Assembly availability depends on the product and delivery location. Check the product details or contact our team for assistance.",
  },
  {
    question: "What if my product arrives damaged?",
    answer:
      "Contact us as soon as possible with your order number and photos of the damaged item. Our team will help resolve the issue.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our team through the Contact page. We will get back to you as soon as possible.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="faq-page">

      {/* HERO */}
      <section className="faq-hero">
        <div className="faq-container">
          <Link href="/" className="faq-back-link">
            ← Back to Home
          </Link>

          <p className="categories-eyebrow">
            HELP CENTER
          </p>

          <h1>
            Frequently
            <br />
            asked questions.
          </h1>

          <p className="faq-intro">
            Find answers to common questions about orders,
            shipping, returns, products and support.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-content">
        <div className="faq-container">

          <div className="faq-heading">
            <div>
              <p className="categories-small-title">
                FAQ
              </p>

              <h2>
                Everything you
                <br />
                need to know.
              </h2>
            </div>

            <p>
              Can't find what you're looking for?
              Get in touch with our team.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                className={`faq-item ${
                  openIndex === index ? "open" : ""
                }`}
                key={faq.question}
              >
                <button
                  className="faq-question"
                  onClick={() =>
                    setOpenIndex(
                      openIndex === index ? null : index
                    )
                  }
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>

                  <span className="faq-icon">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="faq-cta">
        <div className="faq-container faq-cta-inner">

          <div>
            <p className="categories-eyebrow">
              STILL NEED HELP?
            </p>

            <h2>
              We're here
              <br />
              to help.
            </h2>
          </div>

          <div className="faq-cta-content">
            <p>
              Have a question that isn't answered here?
              Contact our team and we'll be happy to help.
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