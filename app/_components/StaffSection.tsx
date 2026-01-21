import React from "react";
import { FaClock, FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa";
import AllJobsSection from "./AllJobsSection";

const StaffSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* HOW TO APPLY */}
        <h2 className="text-2xl font-extrabold text-[#0b4f6c] mb-4 uppercase">
          How to Apply?
        </h2>

        <p className="text-gray-700 mb-4 leading-relaxed">
          If you’re interested in building a rewarding career with us, please
          send your CV to{" "}
          <a
            href="mhglobalpvt.ltd022@gmail.com"
            className="font-semibold text-[#0b4f6c] underline"
          >
            mhglobalpvt.ltd022@gmail.com
          </a>{" "}
          with the subject line{" "}
          <strong>“Career Application – [Your Name]”</strong>. Our HR team will
          get in touch with shortlisted candidates.
        </p>

        <p className="italic text-gray-600 mb-14">
          Join us in empowering businesses and shaping the future of workforce
          solutions.
        </p>

        <AllJobsSection />

        {/* INFO BOXES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t pt-10">
          {/* Work Timings */}
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-[#0b4f6c] text-white rounded-md">
              <FaClock />
            </div>
            <div>
              <h4 className="font-bold text-[#0b4f6c] mb-1">Work Timings</h4>
              <p className="text-gray-700 text-sm">
                9:00 AM – 5:00 PM <br />
                (Shift duties as per requirement)
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-[#0b4f6c] text-white rounded-md">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4 className="font-bold text-[#0b4f6c] mb-1">Location</h4>
              <p className="text-gray-700 text-sm">
                Multiple Hospitals – Pan India
              </p>
            </div>
          </div>

          {/* Qualification */}
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-[#0b4f6c] text-white rounded-md">
              <FaGraduationCap />
            </div>
            <div>
              <h4 className="font-bold text-[#0b4f6c] mb-1">Qualification</h4>
              <p className="text-gray-700 text-sm">
                10th / 12th / Diploma / Degree <br />
                (As per role)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
