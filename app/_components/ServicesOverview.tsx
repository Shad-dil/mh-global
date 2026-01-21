import {
  FaPenNib,
  FaHandsHelping,
  FaCog,
  FaBookReader,
  FaUsers,
  FaBriefcase,
} from "react-icons/fa";

const services = [
  {
    title: "Manpower Solutions",
    desc: "Staffing for retail, warehouses & service industries",
    icon: <FaPenNib />,
  },
  {
    title: "Reliable Support",
    desc: "Qualified workforce with assured performance",
    icon: <FaHandsHelping />,
  },
  {
    title: "Education Services",
    desc: "Staffing & training for schools and colleges",
    icon: <FaCog />,
  },
  {
    title: "Training & Development",
    desc: "Career growth and skill enhancement programs",
    icon: <FaBookReader />,
  },
  {
    title: "Dedicated Team",
    desc: "Expert HR, trainers & administrative staff",
    icon: <FaUsers />,
  },
  {
    title: "Consultancy Services",
    desc: "Recruitment, outsourcing & strategic solutions",
    icon: <FaBriefcase />,
  },
];

export default function ServicesOverview() {
  return (
    <section className="relative py-20 bg-[#071f2a] text-white md:hidden sm:block">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 px-5 max-w-5xl mx-auto">
        <p className="text-teal-400 text-sm font-semibold uppercase tracking-wide mb-2">
          Comprehensive workforce solutions
        </p>

        <h2 className="text-3xl font-extrabold mb-6">
          The state of art service
        </h2>

        <p className="text-gray-200 leading-relaxed mb-10 text-sm">
          We provide skilled, semi-skilled, and unskilled manpower solutions for
          retail, service, logistics, and allied industries. Our rigorous
          screening and training processes ensure professionalism at every
          level.
        </p>

        <div className="space-y-8">
          {services.map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="min-w-[48px] min-h-[48px] bg-teal-500 text-white rounded-lg flex items-center justify-center text-lg">
                {item.icon}
              </div>

              <div>
                <h4 className="font-bold">{item.title}</h4>
                <p className="text-gray-300 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
