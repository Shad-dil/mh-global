import React from "react";
import StaffSection from "./StaffSection";
import ApplicationForm from "./ApplicationForm";

const CareersPage = () => {
  return (
    <main className="bg-white" id="careers">
      {/* Page Container */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b4f6c] mb-6">
          Careers at RPN Stafflink
        </h1>

        {/* Intro Text */}
        <p className="text-gray-700 leading-relaxed mb-14">
          At <strong>RPN Stafflink Service Provider Pvt. Ltd.</strong>, we
          believe that our people are our greatest strength. We are always
          looking for passionate, talented, and dedicated individuals to join
          our growing team and contribute to delivering reliable staffing and
          workforce solutions across industries.
        </p>

        {/* Why Work With Us */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#0b4f6c] mb-6 uppercase">
            Why Work With Us?
          </h2>

          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Growth Opportunities:</strong> We provide continuous
              learning and professional development programs to help you advance
              in your career.
            </li>
            <li>
              <strong>Inclusive Culture:</strong> We value diversity and foster
              a workplace where everyone is respected and encouraged to thrive.
            </li>
            <li>
              <strong>Industry Exposure:</strong> Work with leading
              organizations in education, industrial, corporate, and service
              sectors.
            </li>
            <li>
              <strong>Employee Wellbeing:</strong> We ensure a safe, supportive,
              and motivating work environment.
            </li>
          </ul>
        </section>

        {/* Current Openings */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#0b4f6c] mb-6 uppercase">
            Current Openings
          </h2>

          <p className="text-gray-700 leading-relaxed">
            We regularly hire for multiple positions including administration,
            technical support, security services, housekeeping, and specialized
            staffing roles.
          </p>

          <p className="text-gray-700 leading-relaxed mt-3">
            Check back frequently for new opportunities or reach out directly
            with your updated resume.
          </p>
        </section>

        {/* How To Apply */}
        <StaffSection />
        <ApplicationForm />
      </div>
    </main>
  );
};

export default CareersPage;
