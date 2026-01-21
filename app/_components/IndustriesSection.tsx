import {
  FaHospital,
  FaIndustry,
  FaLaptop,
  FaGraduationCap,
  FaStore,
  FaTruck,
} from "react-icons/fa";

const industries = [
  {
    title: "Healthcare & Pharma",
    desc: "Hospitals, clinics, diagnostic centers, pharmaceutical companies with trained medical support staff",
    icon: <FaHospital />,
  },
  {
    title: "Manufacturing",
    desc: "Automobile, FMCG, textile industries with skilled production and warehouse personnel",
    icon: <FaIndustry />,
  },
  {
    title: "IT & Corporate",
    desc: "Software companies, BPOs, banks with professional office and administrative staff",
    icon: <FaLaptop />,
  },
  {
    title: "Education",
    desc: "Schools, colleges, universities with qualified teaching and non-teaching personnel",
    icon: <FaGraduationCap />,
  },
  {
    title: "Retail & Hospitality",
    desc: "Shopping malls, hotels, restaurants with customer service and operational staff",
    icon: <FaStore />,
  },
  {
    title: "Logistics",
    desc: "Warehouses, distribution centers with logistics and supply chain support personnel",
    icon: <FaTruck />,
  },
];

export default function IndustriesSection() {
  return (
    <section className="bg-white py-16 md:hidden sm:block">
      <div className="px-5 max-w-5xl mx-auto">
        <p className="text-teal-500 text-sm font-semibold uppercase tracking-wide mb-2">
          Specialized workforce solutions across diverse sectors
        </p>

        <h2 className="text-3xl font-extrabold text-[#0b4f6c] mb-10">
          Industries We Serve
        </h2>

        <div className="space-y-8">
          {industries.map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="min-w-[52px] min-h-[52px] bg-[#0b4f6c] text-white rounded-lg flex items-center justify-center text-xl">
                {item.icon}
              </div>

              <div>
                <h3 className="font-bold text-[#0b4f6c]">{item.title}</h3>
                <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
