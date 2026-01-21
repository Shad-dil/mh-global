"use client";

import React from "react";

const ApplicationForm = () => {
  return (
    <section className="bg-[#eaf3f7] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-[#0b4f6c] mb-10">
          Fill the form
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {/* Name */}
          <div>
            <label className="block text-[#0b4f6c] mb-2">Name</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-[#00b3c7] focus:outline-none py-2"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-[#0b4f6c] mb-2">Phone</label>
            <input
              type="tel"
              className="w-full bg-transparent border-b border-[#00b3c7] focus:outline-none py-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#0b4f6c] mb-2">Email</label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-[#00b3c7] focus:outline-none py-2"
            />
          </div>

          {/* Applied For */}
          <div>
            <label className="block text-[#0b4f6c] mb-2">Applied For</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-[#00b3c7] focus:outline-none py-2"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-[#0b4f6c] mb-2">Date Of Birth</label>
            <input
              type="date"
              className="w-full bg-transparent border-b border-[#00b3c7] focus:outline-none py-2"
            />
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-[#0b4f6c] mb-2">Upload Resume</label>
            <input type="file" className="text-sm" />
            <p className="text-xs text-gray-600 mt-2">
              Allowed formats: PDF, DOC, DOCX (Max size: 2MB)
            </p>
          </div>

          {/* Message (Full Width) */}
          <div className="md:col-span-2">
            <label className="block text-[#0b4f6c] mb-2">
              Write something ...
            </label>
            <textarea
              rows={4}
              className="w-full bg-transparent border-b border-[#00b3c7] focus:outline-none py-2 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-[#00b3c7] hover:bg-[#009bad] text-white px-8 py-3 rounded-md font-semibold transition"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ApplicationForm;
