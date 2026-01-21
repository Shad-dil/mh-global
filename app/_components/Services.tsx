import React from "react";
import IndustriesSection from "./IndustriesSection";
import ServicesOverview from "./ServicesOverview";

const services = [
  {
    title: "Manpower Supply",
    description:
      "We provide skilled and reliable manpower supply across industries to meet your business needs.",
    image: "/manpower.jpg",
  },
  {
    title: "Staffing & Payroll Solutions",
    description:
      "Comprehensive staffing and payroll solutions to ensure smooth workforce management.",
    image: "/staffing.jpg",
  },
  {
    title: "Education Staffing",
    description:
      "Specialized staffing services tailored for the education sector, from teachers to support staff.",
    image: "/education.jpg",
  },
  {
    title: "Recruitment & Consultancy",
    description:
      "Expert recruitment and consultancy to help you find the right talent for your organization.",
    image: "/Consultancy.jpg",
  },
];

const ServicesCards = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0b4f6c] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <IndustriesSection />
      <ServicesOverview />
    </section>
  );
};

export default ServicesCards;
