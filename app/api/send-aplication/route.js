import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, phone, email, position, location, experience, message } = await req.json();

    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error("Email credentials are not configured.");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "saigoncodon52@gmail.com", // Email nhận
      subject: `Đơn ứng tuyển - ${name}`,
      text: `
        Họ và tên: ${name}
        Số điện thoại: ${phone}
        Email: ${email}
        Vị trí ứng tuyển: ${position}
        Địa điểm làm việc: ${location}
        Kinh nghiệm: ${experience}
        Thư giới thiệu: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Gửi email thành công!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Lỗi gửi email", error: error.message },
      { status: 500 }
    );
  }
}