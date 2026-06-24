import { useState } from "react";
import Layout from "../components/Layout";
import OverlineFlank from "../components/OverlineFlank";
import OutlinedButton from "../components/OutlinedButton";
import { business, faq } from "../config";

function Row({ icon, label }) {
  const paths = {
    location: (
      <path d="M12 21s-7-7.2-7-12a7 7 0 0 1 14 0c0 4.8-7 12-7 12Z M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    ),
    phone: (
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2c-8 0-14-6-14-14a2 2 0 0 1 2-2Z" />
    ),
    clock: <path d="M12 7v5l3 3 M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />,
  };
  return (
    <div className="flex items-center gap-3">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d49653" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
        {paths[icon]}
      </svg>
      <span style={{ fontSize: "15px", fontWeight: 500, color: "#2c2c2c" }}>{label}</span>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderTop: "1px solid #b6ab9c", paddingTop: "20px", paddingBottom: "4px" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
        style={{ background: "transparent", border: "none", cursor: "pointer", padding: 0 }}
      >
        <span style={{ fontSize: "15px", fontWeight: 700, color: "#2c2c2c" }}>{q}</span>
        <span style={{ fontSize: "18px", color: "#615b53" }}>{open ? "–" : "+"}</span>
      </button>
      {open && (
        <p style={{ fontSize: "14px", fontWeight: 500, color: "#615b53", lineHeight: 1.4, marginTop: "12px" }}>
          {a}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  return (
    <Layout navDark={false}>
      <section className="pt-32 pb-16 px-6" style={{ background: "#d8cbb8" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mb-6">
              <OverlineFlank left="Come by" right={business.overlineRight} color="#2c2c2c" />
            </div>
            <h1
              className="font-display"
              style={{ fontSize: "clamp(32px, 5vw, 65px)", lineHeight: 0.9, letterSpacing: "-0.03em", color: "#2c2c2c" }}
            >
              Contact us
            </h1>
            <div className="mt-8 flex flex-col gap-4">
              <Row icon="location" label={business.address} />
              <Row icon="phone" label={business.phone} />
              <Row icon="clock" label={business.hours} />
            </div>
            <div className="mt-8">
              <a href={`https://wa.me/${business.phone}`} target="_blank" rel="noopener noreferrer">
                <OutlinedButton as="button" color="#2c2c2c">
                  Message on WhatsApp
                </OutlinedButton>
              </a>
            </div>
          </div>
          <div
            className="overflow-hidden"
            style={{ borderRadius: "3px", border: "1px solid #b6ab9c", minHeight: "320px" }}
          >
            <iframe
              src={business.mapEmbedUrl}
              title="Location map"
              className="w-full h-full border-0"
              style={{ minHeight: "320px" }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#dfdad5" }}>
        <div className="max-w-[760px] mx-auto">
          <h2
            className="font-display mb-10 text-center"
            style={{ fontSize: "clamp(28px, 4.5vw, 50px)", lineHeight: 0.9, letterSpacing: "-1.5px", color: "#2c2c2c" }}
          >
            Frequently asked
          </h2>
          <div className="flex flex-col">
            {faq.map((item, i) => (
              <FaqItem key={i} {...item} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
