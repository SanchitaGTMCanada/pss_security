import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    // =====================================================
    // READ MULTIPART FORM DATA
    // =====================================================

    const formData = await request.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const position = formData.get("position");
    const message = formData.get("message");
    const resume = formData.get("resume");

    console.log("📩 Career application received:", {
      name,
      email,
      phone,
      position,
      message,
      resume: resume
        ? {
            name: resume.name,
            type: resume.type,
            size: resume.size,
          }
        : null,
    });

    // =====================================================
    // VALIDATE REQUIRED FIELDS
    // =====================================================

    if (
      !name?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !position?.trim() ||
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

    // =====================================================
    // VALIDATE RESUME
    // =====================================================

    if (!resume || typeof resume.arrayBuffer !== "function") {
      return Response.json(
        {
          success: false,
          message: "Please upload your resume.",
        },
        { status: 400 }
      );
    }

    // =====================================================
    // ALLOWED FILE TYPES
    // =====================================================

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(resume.type)) {
      return Response.json(
        {
          success: false,
          message: "Only PDF, DOC and DOCX files are allowed.",
        },
        { status: 400 }
      );
    }

    // =====================================================
    // FILE SIZE LIMIT
    // =====================================================

    const maxFileSize = 5 * 1024 * 1024;

    if (resume.size > maxFileSize) {
      return Response.json(
        {
          success: false,
          message: "Resume must be smaller than 5 MB.",
        },
        { status: 400 }
      );
    }

    // =====================================================
    // CHECK ENVIRONMENT VARIABLES
    // =====================================================

    if (!process.env.SMTP_USER) {
      console.error("❌ SMTP_USER is missing");

      return Response.json(
        {
          success: false,
          message: "SMTP configuration is incomplete.",
        },
        { status: 500 }
      );
    }

    if (!process.env.SMTP_PASSWORD) {
      console.error("❌ SMTP_PASSWORD is missing");

      return Response.json(
        {
          success: false,
          message: "SMTP configuration is incomplete.",
        },
        { status: 500 }
      );
    }

    if (!process.env.ENQUIRY_TO_EMAIL) {
      console.error("❌ ENQUIRY_TO_EMAIL is missing");

      return Response.json(
        {
          success: false,
          message: "Recipient email is not configured.",
        },
        { status: 500 }
      );
    }

    // =====================================================
    // CREATE OUTLOOK SMTP TRANSPORTER
    // =====================================================

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.office365.com",

      port: Number(process.env.SMTP_PORT) || 587,

      secure: false,

      requireTLS: true,

      auth: {
        user: process.env.SMTP_USER,

        pass: process.env.SMTP_PASSWORD,
      },
    });

    // =====================================================
    // VERIFY SMTP CONNECTION
    // =====================================================

    await transporter.verify();

    console.log("✅ Outlook SMTP connection verified");

    // =====================================================
    // CONVERT RESUME TO BUFFER
    // =====================================================

    const resumeBuffer = Buffer.from(
      await resume.arrayBuffer()
    );

    console.log("📎 Resume prepared:", {
      filename: resume.name,
      type: resume.type,
      size: resume.size,
    });

    // =====================================================
    // SEND EMAIL
    // =====================================================

    const mailResult = await transporter.sendMail({
      // The Outlook account that authenticates with SMTP
      from: process.env.SMTP_USER,

      // IMPORTANT:
      // Your .env.local contains ENQUIRY_TO_EMAIL,
      // so we use that here.
      to: process.env.ENQUIRY_TO_EMAIL,

      // Clicking Reply will reply directly to the applicant
      replyTo: email,

      subject: `New Career Application - ${position}`,

      html: `
        <div
          style="
            margin: 0;
            padding: 30px 15px;
            background: #f3f4f6;
            font-family: Arial, Helvetica, sans-serif;
          "
        >

          <div
            style="
              max-width: 700px;
              margin: 0 auto;
              overflow: hidden;
              border-radius: 14px;
              background: #ffffff;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            "
          >

            <!-- HEADER -->

            <div
              style="
                padding: 30px;
                background: #05051A;
                color: #ffffff;
              "
            >

              <h1
                style="
                  margin: 0 0 8px;
                  font-size: 28px;
                  line-height: 1.2;
                "
              >
                New Career Application
              </h1>

              <p
                style="
                  margin: 0;
                  color: #cbd5e1;
                  font-size: 15px;
                "
              >
                Preventative Security Services
              </p>

            </div>

            <!-- CONTENT -->

            <div
              style="
                padding: 32px;
                color: #111827;
              "
            >

              <!-- NAME -->

              <div style="margin-bottom: 20px;">

                <p
                  style="
                    margin: 0 0 5px;
                    color: #64748b;
                    font-size: 13px;
                    font-weight: bold;
                    text-transform: uppercase;
                  "
                >
                  Name
                </p>

                <p
                  style="
                    margin: 0;
                    font-size: 16px;
                    font-weight: 600;
                  "
                >
                  ${name}
                </p>

              </div>

              <!-- EMAIL -->

              <div style="margin-bottom: 20px;">

                <p
                  style="
                    margin: 0 0 5px;
                    color: #64748b;
                    font-size: 13px;
                    font-weight: bold;
                    text-transform: uppercase;
                  "
                >
                  Email
                </p>

                <p
                  style="
                    margin: 0;
                    font-size: 16px;
                    font-weight: 600;
                  "
                >
                  ${email}
                </p>

              </div>

              <!-- PHONE -->

              <div style="margin-bottom: 20px;">

                <p
                  style="
                    margin: 0 0 5px;
                    color: #64748b;
                    font-size: 13px;
                    font-weight: bold;
                    text-transform: uppercase;
                  "
                >
                  Phone
                </p>

                <p
                  style="
                    margin: 0;
                    font-size: 16px;
                    font-weight: 600;
                  "
                >
                  ${phone}
                </p>

              </div>

              <!-- POSITION -->

              <div style="margin-bottom: 25px;">

                <p
                  style="
                    margin: 0 0 5px;
                    color: #64748b;
                    font-size: 13px;
                    font-weight: bold;
                    text-transform: uppercase;
                  "
                >
                  Applying For
                </p>

                <p
                  style="
                    margin: 0;
                    font-size: 16px;
                    font-weight: 600;
                  "
                >
                  ${position}
                </p>

              </div>

              <!-- MESSAGE -->

              <div style="margin-top: 25px;">

                <p
                  style="
                    margin: 0 0 10px;
                    color: #64748b;
                    font-size: 13px;
                    font-weight: bold;
                    text-transform: uppercase;
                  "
                >
                  Message
                </p>

                <div
                  style="
                    padding: 18px;
                    border-left: 4px solid #B91C1C;
                    border-radius: 6px;
                    background: #f8fafc;
                    color: #374151;
                    font-size: 15px;
                    line-height: 1.7;
                  "
                >
                  ${message}
                </div>

              </div>

              <!-- ATTACHMENT -->

              <div
                style="
                  margin-top: 30px;
                  padding: 18px;
                  border: 1px solid #e5e7eb;
                  border-radius: 10px;
                  background: #fafafa;
                "
              >

                <p
                  style="
                    margin: 0;
                    color: #64748b;
                    font-size: 13px;
                  "
                >
                  Resume attached
                </p>

                <p
                  style="
                    margin: 5px 0 0;
                    color: #111827;
                    font-size: 15px;
                    font-weight: 600;
                  "
                >
                  ${resume.name}
                </p>

              </div>

            </div>

            <!-- FOOTER -->

            <div
              style="
                padding: 20px 30px;
                border-top: 1px solid #e5e7eb;
                background: #fafafa;
              "
            >

              <p
                style="
                  margin: 0;
                  color: #94a3b8;
                  font-size: 12px;
                "
              >
                This application was submitted through the
                Preventative Security Services website.
              </p>

            </div>

          </div>

        </div>
      `,

      // ===================================================
      // RESUME ATTACHMENT
      // ===================================================

      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
          contentType: resume.type,
        },
      ],
    });

    // =====================================================
    // SUCCESS LOG
    // =====================================================

    console.log(
      "✅ Career email sent successfully:",
      mailResult.messageId
    );

    // =====================================================
    // SUCCESS RESPONSE
    // =====================================================

    return Response.json(
      {
        success: true,
        message: "Application submitted successfully.",
      },
      { status: 200 }
    );

  } catch (error) {

    // =====================================================
    // ERROR LOG
    // =====================================================

    console.error("❌ Career API error:", error);

    // =====================================================
    // ERROR RESPONSE
    // =====================================================

    return Response.json(
      {
        success: false,
        message: "Failed to submit your application.",
        error:
          process.env.NODE_ENV === "development"
            ? error.message
            : undefined,
      },
      { status: 500 }
    );
  }
}