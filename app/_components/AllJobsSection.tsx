import React from "react";

const jobsLeft = [
  "Physics Faculty",
  "Chemistry Faculty",
  "Mathematics Faculty",
  "Biology Faculty",
  "PGT (Post Graduate Teacher)",
  "TGT (Trained Graduate Teacher)",
  "Staff Nurse (GNM / B.Sc. Nursing)",
  "Ward Boys",
  "Patient Care Attendants",
  "Lab Technicians",
];

const jobsRight = [
  "Pharmacists",
  "Receptionist / Front Desk Executive",
  "Housekeeping Staff",
  "All Subjects (Class 1 to 12)",
  "NEET Faculty",
  "JEE Faculty",
  "NDA Faculty",
  "SSC Faculty",
  "Medical Admission – MBBS Abroad",
  "Russia / Kyrgyzstan / Uzbekistan",
];

const whyJoin = [
  "Job security & long-term career growth",
  "Supportive & professional work environment",
  "Attractive salary based on experience",
  "Opportunities in schools, colleges & institutes",
  "Training & development support",
];

const AllJobsSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-extrabold text-[#0b4f6c] mb-12 uppercase">
          All Jobs
        </h2>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold text-[#0b4f6c] mb-4">
              Open Vacancies
            </h3>
            <ul className="space-y-3">
              {jobsLeft.map((job, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-teal-500" />
                  <span className="text-gray-700">{job}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-[#0b4f6c] mb-4">&nbsp;</h3>
            <ul className="space-y-3">
              {jobsRight.map((job, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-teal-500" />
                  <span className="text-gray-700">{job}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-[#0b4f6c] mb-4">Why Join Us</h3>
            <ul className="space-y-3">
              {whyJoin.map((reason, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-teal-500" />
                  <span className="text-gray-700">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllJobsSection;
