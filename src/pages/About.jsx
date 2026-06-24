import Layout from "../components/Layout";
import OverlineFlank from "../components/OverlineFlank";
import { business, aboutImage, aboutImageSecondary } from "../config";

export default function About() {
  return (
    <Layout navDark={false}>
      <section className="pt-32 pb-20 px-6" style={{ background: "#d8cbb8" }}>
        <div className="max-w-[1200px] mx-auto">
          <h1
            className="font-display"
            style={{ fontSize: "clamp(36px, 6vw, 69px)", lineHeight: 0.85, letterSpacing: "-0.03em", color: "#2c2c2c" }}
          >
            Our story
          </h1>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: "#dfdad5" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
          <div
            className="aspect-[4/3] overflow-hidden order-2 sm:order-1"
            style={{ borderRadius: "3px" }}
          >
            <img src={aboutImage} alt="Restaurant interior" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 sm:order-2">
            <p style={{ fontSize: "15px", fontWeight: 500, color: "#2c2c2c", lineHeight: 1.4 }}>
              {business.story}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: "#d8cbb8" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
          <div>
            <p style={{ fontSize: "15px", fontWeight: 500, color: "#2c2c2c", lineHeight: 1.4 }}>
              {business.storyExtended}
            </p>
          </div>
          <div
            className="aspect-[4/3] overflow-hidden"
            style={{ borderRadius: "3px" }}
          >
            <img src={aboutImageSecondary} alt="Open flame cooking" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#dfdad5" }}>
        <div className="max-w-[760px] mx-auto">
          <div className="mb-10 text-center">
            <OverlineFlank left="Hours" right="Khorsane Chowk" color="#2c2c2c" />
          </div>
          <div className="flex flex-col gap-0">
            {business.hoursDetailed.map((row, i) => (
              <div
                key={i}
                className="flex justify-between py-4"
                style={{ borderTop: i === 0 ? "1px solid #b6ab9c" : "1px solid #b6ab9c" }}
              >
                <span style={{ fontSize: "15px", fontWeight: 700, color: "#2c2c2c" }}>{row.day}</span>
                <span style={{ fontSize: "15px", fontWeight: 500, color: "#615b53" }}>{row.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
