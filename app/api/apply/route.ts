import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import { writeFile } from "fs/promises";
import path from "path";

export const maxDuration = 60;

// Helper to parse form using busboy
async function parseForm(
  req: NextRequest,
): Promise<{ fields: Record<string, string>; files: Record<string, any> }> {
  const { default: busboy } = await import("busboy");
  const bb = busboy({ headers: Object.fromEntries(req.headers.entries()) });

  const fields: Record<string, string> = {};
  const files: Record<string, any> = {};

  return new Promise((resolve, reject) => {
    bb.on("field", (fieldname, val) => {
      fields[fieldname] = val;
    });

    bb.on("file", (fieldname, file, info) => {
      const chunks: Buffer[] = [];
      file.on("data", (chunk) => chunks.push(chunk));
      file.on("end", () => {
        files[fieldname] = {
          filename: info.filename,
          buffer: Buffer.concat(chunks),
        };
      });
    });

    bb.on("close", () => resolve({ fields, files }));
    bb.on("error", reject);

    if (req.body) {
      const reader = req.body.getReader();
      const push = async () => {
        const { done, value } = await reader.read();
        if (done) {
          bb.end();
          return;
        }
        bb.write(Buffer.from(value));
        push();
      };
      push();
    } else {
      bb.end();
    }
  });
}

export async function POST(req: NextRequest) {
  try {
    const { fields, files } = await parseForm(req);

    const resume = files.resume;
    if (!resume) {
      return NextResponse.json(
        { error: "Resume file is required" },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Job Application" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_RECIPIENT || "mhglobalpvt.ltd022@gmail.com",
      subject: `New Job Application - ${fields.appliedFor}`,
      html: `
        <h3>New Job Application</h3>
        <p><b>Name:</b> ${fields.name}</p>
        <p><b>Email:</b> ${fields.email}</p>
        <p><b>Phone:</b> ${fields.phone}</p>
        <p><b>Age:</b> ${fields.age}</p>
        <p><b>Applied For:</b> ${fields.appliedFor}</p>
        <p><b>Experience:</b> ${fields.experience}</p>
        <p><b>Current Working:</b> ${fields.currentWorking}</p>
        <p><b>Current Package:</b> ${fields.currentPackage}</p>
        <p><b>Qualification:</b> ${fields.qualification}</p>
      `,
      attachments: [
        {
          filename: resume.filename,
          content: resume.buffer,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 },
    );
  }
}
