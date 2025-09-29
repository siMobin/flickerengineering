import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "Name, email, subject, and message are required." },
        { status: 400 }
      );
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    // Define email options
    const mailOptions = {
      from: process.env.MAIL_USERNAME, // Sender address
      to: "flicker.engineering.architect@gmail.com", // Recipient address
      replyTo: email, // Client's email for replies
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully for form submission:", {
      name,
      email,
      subject,
    });

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Error processing contact form submission or sending email:",
      error
    );
    return NextResponse.json(
      { message: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
