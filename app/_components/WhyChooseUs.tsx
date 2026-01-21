import {
  FaUserCheck,
  FaSyncAlt,
  FaShieldAlt,
  FaMapMarkedAlt,
  FaWallet,
  FaHeadset,
} from "react-icons/fa";

const reasons = [
  {
    title: "Verified & Trained Staff",
    desc: "Every staff member undergoes rigorous background verification, skills assessment, and job-specific training before deployment",
    icon: <FaUserCheck />,
  },
  {
    title: "Quick Replacement",
    desc: "Guaranteed quick replacement of staff when required, ensuring zero disruption to your operations",
    icon: <FaSyncAlt />,
  },
  {
    title: "100% Compliance",
    desc: "Complete adherence to labor laws, statutory requirements, and safety regulations with transparent documentation",
    icon: <FaShieldAlt />,
  },
  {
    title: "Pan-India Coverage",
    desc: "Dedicated partner-led management across multiple states with local expertise and national standards",
    icon: <FaMapMarkedAlt />,
  },
  {
    title: "Competitive Pricing",
    desc: "Cost-effective solutions with no hidden charges, flexible contracts, and transparent billing processes",
    icon: <FaWallet />,
  },
  {
    title: "24/7 Support",
    desc: "Round-the-clock customer support for immediate problem resolution and continuous performance monitoring",
    icon: <FaHeadset />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#eaf3f7] py-20" id="chooseUs">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-teal-500 text-sm font-semibold uppercase tracking-wide mb-2">
          Your trusted partner in workforce management
        </p>

        <h2 className="text-3xl font-extrabold text-[#0b4f6c] mb-12">
          Why Choose MH-Global?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reasons.map((item, i) => (
            <div key={i}>
              <div className="text-teal-500 text-4xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-[#0b4f6c] mb-3">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
