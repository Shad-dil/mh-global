import Image from "next/image";
import Stats from "./Stats";
import LeadershipSection from "./Leadership";

export default function AboutUs() {
  return (
    <main className="bg-white" id="aboutUs">
      {/* ===================== INTRO ===================== */}
      <section className="py-20">
        <h1 className="text-4xl font-extrabold text-[#0b4f6c] mt-3 mb-8 flex justify-center ">
          About Us
        </h1>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 text-gray-700 leading-relaxed">
          <p>
            MH-Global Service Provider Pvt. Ltd. is a trusted manpower
            outsourcing company, providing reliable and trained staff for
            corporate offices, institutions, hospitals, and industries. With a
            strong focus on quality, discipline, and professionalism, we ensure
            that our clients receive the right workforce to meet their business
            needs.
          </p>
          <p>
            We operate with a strong regional presence across India, with our
            head office located in Nagpur, MH, India. This structure allows us
            to deliver efficient, localized services while maintaining the
            professionalism of a unified private limited company.
          </p>
        </div>
      </section>

      {/* ===================== OUR STORY ===================== */}
      <section className="py-20 bg-[#f3f8fb]">
        <div className="max-w-5xl mx-auto px-6">
          <span className="text-sm font-semibold text-teal-500 tracking-wide uppercase">
            Building Success Through Dedicated Workforce Solutions
          </span>
          <h2 className="text-4xl font-extrabold text-[#0b4f6c] mt-3 mb-8">
            Our Story
          </h2>

          <div className="space-y-6 text-gray-700">
            <p>
              Founded with a vision to bridge the gap between businesses and
              quality manpower, MH-Global has grown from a regional service
              provider to a pan-India workforce solutions company. Our journey
              began with a simple yet powerful mission: to deliver trained,
              reliable, and professional staff who become valuable assets to our
              clients operations.
            </p>

            <p>
              Over the years, we have built strong relationships with corporate
              offices, healthcare institutions, manufacturing facilities, and
              educational organizations. Our success is measured not just in
              numbers, but in the long-term partnerships we’ve established and
              the thousands of successful placements that have contributed to
              our clients’ growth stories.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== LEADERSHIP ===================== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-sm font-semibold text-teal-500 uppercase">
            Meet the visionaries behind MH-Global
          </span>
          <h2 className="text-4xl font-extrabold text-[#0b4f6c] mt-3 mb-12">
            Our Leadership Team
          </h2>

          <LeadershipSection />
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <Stats />

      {/* ===================== OUR APPROACH ===================== */}
      <section className="py-20 bg-[#f3f8fb]">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-sm font-semibold text-teal-500 uppercase">
            How we work with our clients
          </span>
          <h2 className="text-4xl font-extrabold text-[#0b4f6c] mt-3 mb-12">
            Our Approach
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              {
                step: "1. Understand",
                text: "We begin by thoroughly understanding your business needs, work environment, and specific requirements for staff deployment.",
              },
              {
                step: "2. Source & Screen",
                text: "Our recruitment team sources candidates through verified channels and conducts rigorous screening to match your criteria.",
              },
              {
                step: "3. Deploy & Monitor",
                text: "We deploy trained and verified staff to your location with proper documentation and continuously monitor their performance.",
              },
              {
                step: "4. Support & Optimize",
                text: "We provide ongoing support, handle all compliance matters, and optimize staffing based on your evolving needs.",
              },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-lg font-bold text-[#0b4f6c] mb-3">
                  {item.step}
                </h3>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
