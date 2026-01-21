import React from "react";
import { FaClock, FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa";

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
            href="mailto:hr@rpnstafflink.in"
            className="font-semibold text-[#0b4f6c] underline"
          >
            hr@rpnstafflink.in
          </a>{" "}
          with the subject line{" "}
          <strong>“Career Application – [Your Name]”</strong>. Our HR team will
          get in touch with shortlisted candidates.
        </p>

        <p className="italic text-gray-600 mb-14">
          Join us in empowering businesses and shaping the future of workforce
          solutions.
        </p>

        {/* HOSPITAL STAFF */}
        <h2 className="text-2xl font-extrabold text-[#0b4f6c] mb-8 uppercase">
          All Jobs
        </h2>

        {/* Two Column Lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
          {/* Open Vacancies */}
          <div>
            <h3 className="font-bold text-[#0b4f6c] mb-4">Open Vacancies:</h3>

            <ul className="space-y-3">
              {[
                "Staff Nurse (GNM / B.Sc. Nursing)",
                "Ward Boys",
                "Patient Care Attendants",
                "Lab Technicians",
                "Pharmacists",
                "Receptionist / Front Desk Executive",
                "Housekeeping Staff",
              ].map((role, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-teal-500" />
                  <span className="text-gray-700">{role}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why Join Us */}
          <div>
            <h3 className="font-bold text-[#0b4f6c] mb-4">Why Join Us</h3>

            <ul className="space-y-3">
              {[
                "Job security & career growth",
                "Supportive work environment",
                "Training & development opportunities",
              ].map((reason, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-teal-500" />
                  <span className="text-gray-700">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

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
