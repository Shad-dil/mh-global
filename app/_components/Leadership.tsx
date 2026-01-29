import Image from "next/image";

export default function LeadershipSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= ROW 1 ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Image */}
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
            <Image
              src="/team/Ekram.jpeg" // first / main image
              alt="Leadership"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Text */}
          <div>
            <h2 className="text-4xl font-extrabold text-[#0b4f6c] mb-6">
              Er Ekram Hussain
            </h2>
            <p className="text-gray-600 mb-6 font-bold">Founder & Director</p>

            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between businesses and
                quality manpower, <strong>MH-Global</strong> has grown from a
                regional service provider to a pan-India workforce solutions
                company. Our journey began with a simple yet powerful mission:
                to deliver trained, reliable, and professional staff who become
                valuable assets to our clients’ operations.
              </p>

              <p>
                Over the years, we have built strong relationships with
                corporate offices, healthcare institutions, manufacturing
                facilities, and educational organizations. Our success is
                measured not just in numbers, but in the long-term partnerships
                we’ve established and the thousands of successful placements
                that have contributed to our clients’ growth stories.
              </p>
            </div>
          </div>
        </div>

        {/* ================= ROW 2 ================= */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Card 1 */}
          <div className="text-center">
            <div className="relative w-full h-[320px] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/team/Ehtesham.jpeg"
                alt="Er Prince"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#0b4f6c]">Ehtesham</h3>
            <p className="text-gray-600">CEO</p>
          </div>
          <div className="text-center">
            <div className="relative w-full h-[280px] rounded-2xl overflow-hidden mb-5">
              <Image
                src="/team/prince.jpeg"
                alt="Er Prince"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#0b4f6c]">Er Prince</h3>
            <p className="text-gray-600">Co-Director</p>
          </div>
          <div className="text-center">
            <div className="relative w-full h-[280px] rounded-2xl overflow-hidden mb-5">
              <Image
                src="/team/md.jpeg"
                alt="Shahroz Alam"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#0b4f6c]">
              Shahroz Alam
            </h3>
            <p className="text-gray-600">Managing Director</p>
          </div>
          {/* Card 2 */}
          <div className="text-center">
            <div className="relative w-full h-[280px] rounded-2xl overflow-hidden mb-5">
              <Image
                src="/team/nezam.jpeg"
                alt="Md Nezam Hussain"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#0b4f6c]">
              Md Nezam Hussain
            </h3>
            <p className="text-gray-600">Cordinator</p>
          </div>

          {/* Card 3 */}
        </div>
      </div>
    </section>
  );
}
