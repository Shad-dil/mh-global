const steps = [
  {
    step: "1",
    title: "Requirement Analysis",
    desc: "We understand your business needs, work environment, and specific requirements for staff deployment",
  },
  {
    step: "2",
    title: "Sourcing & Screening",
    desc: "Multi-stage screening including background checks, skills assessment, and detailed interviews",
  },
  {
    step: "3",
    title: "Training & Deployment",
    desc: "Job-specific training and orientation before deployment with proper documentation and uniforms",
  },
  {
    step: "4",
    title: "Ongoing Support",
    desc: "Continuous performance monitoring, compliance management, and immediate staffing support",
  },
];

export default function OurProcess() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-teal-500 text-sm font-semibold uppercase tracking-wide mb-2">
          Simple, transparent, and efficient
        </p>

        <h2 className="text-3xl font-extrabold text-[#0b4f6c] mb-14">
          Our Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((item, i) => (
            <div key={i}>
              <span className="text-6xl font-bold text-[#0b4f6c]">
                {item.step}
              </span>
              <h4 className="mt-4 font-bold text-[#0b4f6c]">{item.title}</h4>
              <p className="text-gray-700 text-sm mt-3 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
