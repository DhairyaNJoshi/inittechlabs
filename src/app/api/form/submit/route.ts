import { generateEmailString } from "@/helper/generateEmailString";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as yup from "yup";
const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;

const formSchema = yup.object().shape({
  email: yup.string().email().required("This field is required"),
  name: yup.string().required("This field is required"),
  companyName: yup.string().required("This field is required"),
  requirement: yup.string().required("This field is required"),
  phone: yup
    .string()
    .required("This field is required")
    .matches(phoneRegex, "Invalid Number!")
    .min(10, "Must be at least 10 characters")
    .max(18, "Invalid Number!"),
});
const transporter = nodemailer.createTransport({
  // @ts-ignore
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});
export async function POST(request: Request) {
  if (request.method !== "POST") {
    return NextResponse.json({ message: "Method not allowed" });
  }
  try {
    const data = await request.json();

    // Validate the request body
    await formSchema.validate(data);

    const result = await transporter.sendMail({
      from: process.env.MAIL_FROM_ADDRESS,
      to: process.env.RECEIVER_EMAIL,
      replyTo: data.email,
      subject: `Inquiry`,
      text: "Inquiry",
      html: generateEmailString(data),
    });

    return NextResponse.json(
      {
        status: true,
        message: "Your request has been submitted!",
        data: result,
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return NextResponse.json(
        { status: false, message: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      {
        status: true,
        message: "Something Went Wrong.",
        error,
      },
      { status: 500 }
    );
  }
}
