import React from "react";
import { Link } from "react-router-dom";
import "../css/About.css";

const storeValues = [
  {
    number: "01",
    title: "A wide product range",
    description: "Explore beauty and fragrances, groceries, furniture, home and kitchen essentials, laptops, mobile accessories, footwear, and more.",
  },
  {
    number: "02",
    title: "Easy product discovery",
    description: "Browse products by category, compare details, and find useful everyday items all in one convenient store.",
  },
  {
    number: "03",
    title: "Here when you need us",
    description: "Our customer support team is ready to help with product questions, orders, delivery, and returns.",
  },
];

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero" aria-labelledby="about-title">
        <p className="about-eyebrow">EVERYDAY FINDS, ALL IN ONE PLACE</p>
        <h1 id="about-title">More of what you need, all in one place.</h1>
        <p className="about-lead">
          Tory Adams Store is your online superstore for carefully selected
          products across beauty, groceries, home, electronics, footwear, and
          more, with a convenient shopping experience from browse to checkout.
        </p>
        <Link className="about-cta" to="/categories">Explore categories <span aria-hidden="true">→</span></Link>
        <div className="about-hero-accent" aria-hidden="true">
          <span>TA</span>
        </div>
      </section>

      <section className="about-story" aria-labelledby="story-title">
        <div>
          <p className="about-eyebrow">OUR STORY</p>
          <h2 id="story-title">A little bit of everything you need.</h2>
        </div>
        <div className="about-story-copy">
          <p>
            We bring useful finds together in one place, from beauty and
            fragrances to groceries, furniture, home décor, and kitchen
            accessories. You can also browse laptops, mobile accessories,
            footwear, watches, and more.
          </p>
          <p>
            Whether you are shopping for the home, everyday essentials, or
            personal technology, clear product information and straightforward
            categories make it easier to find what you are looking for.
          </p>
        </div>
      </section>

      <section className="about-values" aria-labelledby="values-title">
        <div className="about-section-heading">
          <p className="about-eyebrow">THE TORY ADAMS DIFFERENCE</p>
          <h2 id="values-title">Everything made easier to find.</h2>
          <p>A convenient place to discover products for everyday life.</p>
        </div>
        <div className="about-value-grid">
          {storeValues.map((value) => (
            <article className="about-value-card" key={value.number}>
              <span className="about-value-number">{value.number}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-bottom-cta">
        <div>
          <p className="about-eyebrow">YOUR NEXT FIND IS HERE</p>
          <h2>Explore products for every part of your day.</h2>
        </div>
        <Link className="about-cta" to="/categories">Browse categories <span aria-hidden="true">→</span></Link>
      </section>
    </main>
  );
}
