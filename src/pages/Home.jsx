import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import OverlineFlank from "../components/OverlineFlank";
import OutlinedButton from "../components/OutlinedButton";
import RatingWidget from "../components/RatingWidget";
import ReviewCard from "../components/ReviewCard";
import {
  business,
  hero,
  highlights,
  rating,
  reviews,
  faq,
} from "../config";

export default function Home() {
  return (
    <Layout>
      {/* Dark hero — full viewport, centered display headline, flanking overlines, no buttons */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "#2c2c2c" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(44,44,44,0.55), rgba(41,38,34,0.85)), url(${hero.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-[1200px] w-full mx-auto px-6 text-center">
          <div className="mb-8">
            <OverlineFlank left={business.overlineLeft} right={business.overlineRight} />
          </div>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(48px, 10vw, 115px)",
              lineHeight: 0.8,
              letterSpacing: "-0.04em",
              color: "#dfdad5",
            }}
          >
            {business.tagline}
          </h1>
        </div>
      </section>

      {/* Section opener — headline left, rating widget right, no body copy */}
      <section className="py-16 px-6" style={{ background: "#d8cbb8" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <h2
            className="font-display"
            style={{ fontSize: "clamp(36px, 6vw, 69px)", lineHeight: 0.85, letterSpacing: "-0.03em", color: "#2c2c2c" }}
          >
            {business.name}
          </h2>
          <RatingWidget rating={rating} />
        </div>
      </section>

      {/* Intro body copy on light surface */}
      <section className="py-16 px-6" style={{ background: "#dfdad5" }}>
        <div className="max-w-[560px] mx-auto text-center">
          <p style={{ fontSize: "15px", fontWeight: 500, color: "#2c2c2c", lineHeight: 1.4 }}>
            {business.intro}
          </p>
        </div>
      </section>

      {/* Highlight dishes teaser grid */}
      <section className="py-20 px-6" style={{ background: "#d8cbb8" }}>
        <div className="max-w-[1200px] mx-auto">
          <h3
            className="font-display mb-12"
            style={{ fontSize: "clamp(28px, 4vw, 50px)", lineHeight: 0.9, letterSpacing: "-1.5px", color: "#2c2c2c" }}
          >
            What to expect
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <div key={i}>
                <div
                  className="aspect-[4/3] mb-4 overflow-hidden"
                  style={{ borderRadius: "3px" }}
                >
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <p style={{ fontSize: "15px", fontWeight: 700, color: "#2c2c2c", margin: 0 }}>
                  {item.name}
                </p>
                <p style={{ fontSize: "14px", fontWeight: 500, color: "#615b53", marginTop: "4px" }}>
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image overlay section — text over photo, ghost button */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(41,38,34,0.85), rgba(41,38,34,0.45)), url(${highlights[2].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-[1200px] mx-auto">
          <h3
            className="font-display"
            style={{
              fontSize: "clamp(32px, 5vw, 69px)",
              lineHeight: 0.85,
              letterSpacing: "-2.42px",
              color: "#dfdad5",
              maxWidth: "560px",
            }}
          >
            Best enjoyed slowly
          </h3>
          <p style={{ fontSize: "15px", fontWeight: 500, color: "#d8cbb8", lineHeight: 1.4, maxWidth: "480px", marginTop: "20px" }}>
            {business.story}
          </p>
          <div className="mt-8">
            <Link to="/about">
              <OutlinedButton as="button" color="#d8cbb8">
                About us
              </OutlinedButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews carousel */}
      <section className="py-20 px-6" style={{ background: "#d8cbb8" }}>
        <div className="max-w-[1200px] mx-auto">
          <h3
            className="font-display mb-10"
            style={{ fontSize: "clamp(28px, 4vw, 50px)", lineHeight: 0.9, letterSpacing: "-1.5px", color: "#2c2c2c" }}
          >
            What people say
          </h3>
          <div className="flex gap-5 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
            {reviews.map((r, i) => (
              <ReviewCard key={i} {...r} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="py-20 px-6" style={{ background: "#dfdad5" }}>
        <div className="max-w-[760px] mx-auto">
          <h3
            className="font-display mb-10 text-center"
            style={{ fontSize: "clamp(28px, 4vw, 50px)", lineHeight: 0.9, letterSpacing: "-1.5px", color: "#2c2c2c" }}
          >
            Good to know
          </h3>
          <div className="flex flex-col gap-6">
            {faq.slice(0, 2).map((item, i) => (
              <div key={i} style={{ borderTop: "1px solid #b6ab9c", paddingTop: "20px" }}>
                <p style={{ fontSize: "15px", fontWeight: 700, color: "#2c2c2c", margin: 0 }}>{item.q}</p>
                <p style={{ fontSize: "14px", fontWeight: 500, color: "#615b53", lineHeight: 1.4, marginTop: "8px" }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact">
              <OutlinedButton as="button" color="#2c2c2c">
                More questions
              </OutlinedButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 px-6 text-center" style={{ background: "#2c2c2c" }}>
        <h3
          className="font-display"
          style={{ fontSize: "clamp(32px, 5vw, 65px)", lineHeight: 0.9, letterSpacing: "-0.03em", color: "#dfdad5" }}
        >
          Pull up a chair
        </h3>
        <div className="mt-8">
          <a href={`https://wa.me/${business.phone}`} target="_blank" rel="noopener noreferrer">
            <OutlinedButton as="button" color="#d8cbb8">
              Message on WhatsApp
            </OutlinedButton>
          </a>
        </div>
      </section>
    </Layout>
  );
}
