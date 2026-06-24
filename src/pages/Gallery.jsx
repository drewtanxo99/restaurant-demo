import Layout from "../components/Layout";
import OverlineFlank from "../components/OverlineFlank";
import OutlinedButton from "../components/OutlinedButton";
import { business, gallery } from "../config";

export default function Gallery() {
  return (
    <Layout navDark={false}>
      <section className="pt-32 pb-16 px-6" style={{ background: "#d8cbb8" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-6">
            <OverlineFlank left="A taste of the night" right={business.overlineRight} color="#2c2c2c" />
          </div>
          <h1
            className="font-display"
            style={{ fontSize: "clamp(36px, 6vw, 69px)", lineHeight: 0.85, letterSpacing: "-0.03em", color: "#2c2c2c" }}
          >
            Gallery
          </h1>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: "#dfdad5" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gallery.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden"
              style={{ borderRadius: "3px", aspectRatio: i % 3 === 0 ? "3/4" : "4/3" }}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 text-center" style={{ background: "#2c2c2c" }}>
        <h3
          className="font-display"
          style={{ fontSize: "clamp(28px, 4.5vw, 50px)", lineHeight: 0.9, letterSpacing: "-1.5px", color: "#dfdad5" }}
        >
          Come see it for yourself
        </h3>
        <div className="mt-8">
          <a href={`https://wa.me/${business.phone}`} target="_blank" rel="noopener noreferrer">
            <OutlinedButton as="button" color="#d8cbb8">
              Reserve a table
            </OutlinedButton>
          </a>
        </div>
      </section>
    </Layout>
  );
}
