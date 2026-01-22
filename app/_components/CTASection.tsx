import Image from "next/image";

export default function CTASection() {
  return (
    <section className="bg-[#eaf3f7] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/education.jpg"
            alt="Workforce management"
            width={600}
            height={400}
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl font-extrabold text-[#0b4f6c] mb-6">
            Ready to Transform Your Workforce Management?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            Partner with MH-Global for reliable, professional, and compliant
            staffing solutions. Let us handle your workforce needs while you
            focus on growing your business.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="https://wa.me/9356779714?text=Hi%20Sir,%20I%20want%20to%20know%20more."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-teal-600 transition"
            >
              Get Started Today
            </a>

            <a
              href="#aboutUs"
              className="border border-teal-500 text-teal-500 px-6 py-3 rounded-md font-semibold hover:bg-teal-500 hover:text-white transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
