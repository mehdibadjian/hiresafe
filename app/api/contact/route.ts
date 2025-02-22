import { createTransport } from "nodemailer"

const transporter = createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_PASSWORD,
  },
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, company, message } = body

    await transporter.sendMail({
      from: process.env.ZOHO_USER,
      to: "support@hiresafe.app",
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company}

Message:
${message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${firstName} ${lastName}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Company:</strong> ${company}</p>
<h3>Message:</h3>
<p>${message}</p>
      `,
    })

    console.log("Email sent successfully")
    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: "Failed to send message" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    })
  }
}

