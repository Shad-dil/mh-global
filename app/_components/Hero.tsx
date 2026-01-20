import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-image.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">
        {/* Headline */}
        <h1 className="text-3xl md:text-6xl font-extrabold uppercase tracking-wide leading-tight mb-6 text-left">
          <span className="block">“Reliable Manpower</span>
          <span className="block">Solution for Your</span>
          <span className="block">Business Growth”</span>
        </h1>

        <p className="max-w-3xl text-sm md:text-base uppercase text-gray-200 leading-relaxed text-left">
          We provide skilled and non-skilled staff to corporate offices, private
          firms, supermarkets, hospitals, education and government organizations
          across all over India. Our head office is located at Nagpur,
          Maharashtra.
        </p>
      </div>
    </section>
  );
};

export default Hero;
