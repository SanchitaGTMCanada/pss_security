import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();

    console.log("📩 Received payload:", body);

    const {
      name,
      email,
      phone,
      message,
    } = body;

    // Validate the fields actually sent by the frontend
    if (
      !name?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !message?.trim()
    ) {
      return Response.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    console.log("✅ Validation passed");

    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      requireTLS: true,

      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ENQUIRY_TO_EMAIL,
      replyTo: email,

      subject: `New Website Enquiry - ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto;">

          <div style="
            background: #05051A;
            padding: 25px;
            color: white;
          ">
            <h2>New Website Enquiry</h2>
            <p>Preventative Security Services</p>
          </div>

          <div style="
            padding: 30px;
            background: #f5f5f5;
          ">

            <p>
              <strong>Name:</strong> ${name}
            </p>

            <p>
              <strong>Email:</strong> ${email}
            </p>

            <p>
              <strong>Phone:</strong> ${phone}
            </p>

            <p>
              <strong>Message:</strong>
            </p>

            <div style="
              background: white;
              padding: 20px;
              border-left: 4px solid #B91C1C;
            ">
              ${message}
            </div>

          </div>
        </div>
      `,
    });

    console.log("✅ Email sent successfully");

    return Response.json({
      success: true,
      message: "Enquiry sent successfully.",
    });

  } catch (error) {
    console.error("❌ Email error:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to send enquiry.",
      },
      { status: 500 }
    );
  }
}