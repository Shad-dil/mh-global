"use client";

import Image from "next/image";

const clients = [
  {
    category: "Education",
    logos: [
      "/client/aakash.jpg",
      "/client/fiitjee.jpg",
      "/client/motion.jpg",
      "/client/allen.jpg",
      "/client/ecig.jpg",
    ],
  },
  {
    category: "Hospitals",
    logos: ["/client/fortis.jpg", "/client/vedanta.jpg", "/client/gm.jpg"],
  },
  {
    category: "Corporate & IT",
    logos: ["/client/tcs.jpg"],
  },
  {
    category: "Electrical",
    logos: ["/client/crompton.jpg"],
  },
];

export default function Client() {
  return (
    <section className="bg-white py-20" id="clients">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {clients.map((group, idx) => (
          <div key={idx}>
            {/* Category Title */}
            <h3 className="text-2xl font-bold text-[#0b4f6c] mb-8">
              {group.category}
            </h3>

            {/* 📱 MOBILE — AUTO SLIDER */}
            <div className="relative overflow-hidden md:hidden">
              <div className="flex gap-10 animate-logo-scroll">
                {[...group.logos, ...group.logos].map((logo, i) => (
                  <div
                    key={i}
                    className="min-w-[140px] flex items-center justify-center"
                  >
                    <Image
                      src={logo}
                      alt="Client logo"
                      width={120}
                      height={60}
                      className="object-contain transition"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 🖥 DESKTOP — GRID */}
            <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-10 items-center">
              {group.logos.map((logo, i) => (
                <div key={i} className="flex items-center justify-center">
                  <Image
                    src={logo}
                    alt="Client logo"
                    width={140}
                    height={70}
                    className="object-contain  transition"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
