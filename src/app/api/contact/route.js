import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return new Response("Lütfen tüm alanları doldurun", { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `Yeni İletişim Formu: ${name}`,
      text: `
        İsim: ${name}
        Email: ${email}
        Telefon: ${phone || "Belirtilmemiş"}
        Mesaj: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response("E-posta başarıyla gönderildi!", { status: 200 });
  } catch (error) {
    console.error("Mail gönderme hatası:", error);
    return new Response("Mail gönderme başarısız", { status: 500 });
  }
}
