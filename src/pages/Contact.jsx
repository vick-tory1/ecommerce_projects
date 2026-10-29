import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import "../css/Contact.css";

const supportEmail = "ekpeadams@gmail.com";
const supportPhone = "+2349057920012";
const whatsappUrl = "https://wa.me/2349057920012";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [emailDraft, setEmailDraft] = useState("");
  const [error, setError] = useState("");

  function handleChange(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setError("Please complete your name, email, and message.");
      return;
    }

    const subject = encodeURIComponent(`Store enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    const draftUrl = `mailto:${supportEmail}?subject=${subject}&body=${body}`;

    setEmailDraft(draftUrl);
    window.location.href = draftUrl;
  }

  return (
    <section className="contact-page" aria-labelledby="contact-title">
      <header className="contact-intro">
        <p className="contact-eyebrow">WE&apos;RE HERE TO HELP</p>
        <h1 id="contact-title">Contact us</h1>
        <p>
          Questions about an order, a product, or finding the right fit? Send
          our team a message or chat with customer support.
        </p>
      </header>

      <div className="contact-layout">
        <section className="contact-panel contact-form-panel" aria-labelledby="message-title">
          {emailDraft ? (
            <div className="contact-success" role="status">
              <span className="contact-success-mark" aria-hidden="true">✓</span>
              <h2 id="message-title">Your email draft is ready</h2>
              <p>
                Review and send it in your email app. If it didn&apos;t open,
                you can open the draft directly.
              </p>
              <a className="contact-button" href={emailDraft}>Open email draft</a>
              <button
                className="contact-text-button"
                type="button"
                onClick={() => {
                  setEmailDraft("");
                  setForm({ name: "", email: "", message: "" });
                }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <div className="contact-panel-heading">
                <p className="contact-eyebrow">SEND A MESSAGE</p>
                <h2 id="message-title">How can we help?</h2>
                <p>We&apos;ll get back to you as soon as we can.</p>
              </div>
              {error && <p className="contact-error" role="alert">{error}</p>}
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <label>
                    Name
                    <input
                      autoComplete="name"
                      maxLength={100}
                      name="name"
                      onChange={handleChange}
                      required
                      value={form.name}
                    />
                  </label>
                  <label>
                    Email
                    <input
                      autoComplete="email"
                      maxLength={254}
                      name="email"
                      onChange={handleChange}
                      required
                      type="email"
                      value={form.email}
                    />
                  </label>
                </div>
                <label>
                  Message
                  <textarea
                    maxLength={2000}
                    name="message"
                    onChange={handleChange}
                    required
                    rows={6}
                    value={form.message}
                  />
                </label>
                <button className="contact-button" type="submit">Prepare email</button>
                <p className="contact-form-note">
                  Your email app will open with your message ready to review and send.
                </p>
              </form>
            </>
          )}
        </section>

        <aside className="contact-sidebar" aria-label="Customer support contact details">
          <section className="contact-panel support-panel">
            <p className="contact-eyebrow">QUICK SUPPORT</p>
            <h2>Prefer to chat?</h2>
            <p>
              Chat with our support team on WhatsApp for help with products,
              orders, delivery, or returns.
            </p>
            <a
              className="contact-button contact-button-secondary"
              href={`${whatsappUrl}?text=${encodeURIComponent("Hi Tory Adams Store, I need help with an order or product.")}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaWhatsapp aria-hidden="true" /> Chat on WhatsApp
            </a>
            <p className="support-hours">Mon–Fri, 9am–8pm · Sat, 10am–6pm</p>
          </section>

          <section className="contact-panel contact-details">
            <p className="contact-eyebrow">OTHER WAYS TO REACH US</p>
            <h2>Store support</h2>
            <dl>
              <div className="contact-detail">
                <span className="contact-detail-icon" aria-hidden="true"><FaEnvelope /></span>
                <div>
                <dt>Email</dt>
                <dd><a href={`mailto:${supportEmail}`}>{supportEmail}</a></dd>
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-detail-icon" aria-hidden="true"><FaPhoneAlt /></span>
                <div>
                <dt>Phone</dt>
                <dd><a href="tel:+2349057920012">{supportPhone}</a></dd>
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-detail-icon" aria-hidden="true"><FaMapMarkerAlt /></span>
                <div>
                <dt>Visit</dt>
                <dd>12 Commerce Avenue, Market City, Lagos, Nigeria</dd>
                </div>
              </div>
            </dl>
          </section>
        </aside>
      </div>
    </section>
  );
}
