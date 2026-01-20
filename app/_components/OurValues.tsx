import React from "react";
import Image from "next/image";
import Link from "next/link";

const ValuesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Image with overlay */}
          <div className="relative w-full h-[360px] md:h-[460px] rounded-lg overflow-hidden">
            <Image
              src="/hero-image.jpg" // dummy image
              alt="Our values"
              fill
              className="object-cover"
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0b4f6c]/35" />
          </div>

          {/* RIGHT: Content */}
          <div>
            <p className="text-sm uppercase tracking-widest text-teal-500 mb-3 font-semibold">
              What Drives Us Forward
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b4f6c] mb-6">
              Our values and goals
            </h2>

            <ul className="space-y-4 text-gray-700 mb-8">
              <li>
                <strong>Reliability</strong> – Always delivering on our
                commitments
              </li>
              <li>
                <strong>Professionalism</strong> – Trained, uniformed, and
                background-verified staff
              </li>
              <li>
                <strong>Client First</strong> – Customized solutions as per
                business requirements
              </li>
              <li>
                <strong>Compliance</strong> – 100% legal and statutory adherence
              </li>
            </ul>

            <Link
              href="/about"
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md font-semibold transition"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
