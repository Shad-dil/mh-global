"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { isValid } from "zod/v3";

type ApplicationFormData = z.infer<typeof applicationSchema>;

export const applicationSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().length(10, "Phone number is required"),
  age: z.string().min(1, "Age is required"),
  appliedFor: z.string().min(1, "Applied For is required"),
  experience: z.string().optional(),
  currentWorking: z.string().optional(),
  currentPackage: z.string().optional(),
  qualification: z.string().min(1, "Qualification is required"),
  resume: z
    .any()
    .refine((file) => file?.length === 1, "Resume is required")
    .refine(
      (file) =>
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file?.[0]?.type),
      "Only PDF, DOC, DOCX allowed",
    )
    .refine(
      (file) => file?.[0]?.size <= 2 * 1024 * 1024,
      "Max file size is 2MB",
    ),
});

export default function ApplicationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    mode: "onChange",
  });

  async function onSubmit(data: ApplicationFormData) {
    try {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        if (key === "resume") {
          formData.append("resume", value[0]);
        } else {
          formData.append(key, value as string);
        }
      });

      await fetch("/api/apply", { method: "POST", body: formData });

      toast.success("Application submitted successfully 🎉");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="bg-[#eaf3f7] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#0b4f6c] mb-10">
          Fill the form
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10"
        >
          {/* Name */}
          <Field label="Name" error={errors.name?.message}>
            <input
              {...register("name")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b3c7]"
            />
          </Field>

          {/* Phone */}
          <Field label="Phone" error={errors.phone?.message}>
            <input
              {...register("phone")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b3c7]"
            />
          </Field>

          {/* Email */}
          <Field label="Email" error={errors.email?.message}>
            <input
              {...register("email")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b3c7]"
            />
          </Field>

          {/* Age */}
          <Field label="Age" error={errors.age?.message}>
            <input
              type="number"
              {...register("age")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b3c7]"
            />
          </Field>

          {/* Applied For */}
          <Field label="Applied For" error={errors.appliedFor?.message}>
            <input
              {...register("appliedFor")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b3c7]"
            />
          </Field>

          {/* Experience */}
          <Field label="Experience">
            <input
              {...register("experience")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b3c7]"
            />
          </Field>

          {/* Current Working */}
          <Field label="Current Working">
            <input
              {...register("currentWorking")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b3c7]"
            />
          </Field>

          {/* Current Package */}
          <Field label="Current Package">
            <input
              {...register("currentPackage")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b3c7]"
            />
          </Field>

          {/* Qualification */}
          <Field label="Qualification" error={errors.qualification?.message}>
            <input
              {...register("qualification")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b3c7]"
            />
          </Field>

          {/* Resume */}
          <div>
            <label className="block text-[#0b4f6c] mb-2">Upload Resume</label>
            <input
              type="file"
              {...register("resume")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b3c7]"
            />
            {errors.resume && (
              <p className="text-red-500 text-sm mt-1">
                {typeof errors.resume.message === "string"
                  ? errors.resume.message
                  : "Resume is required"}
              </p>
            )}
            <p className="text-xs text-gray-600 mt-2">
              PDF, DOC, DOCX (Max 2MB)
            </p>
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="
    bg-[#00b3c7] hover:bg-[#009bad]
    text-white px-8 py-3 rounded-md font-semibold transition
    disabled:opacity-50 disabled:cursor-not-allowed
  "
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

/* ---------------- Reusable Field Wrapper ---------------- */

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[#0b4f6c] mb-2">{label}</label>
      {children}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
