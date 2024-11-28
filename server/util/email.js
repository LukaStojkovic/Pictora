import nodemailer from "nodemailer";
import { convert } from "html-to-text";

export class Email {
  constructor(user) {
    this.firstName = user.firstName;
    this.from = `Pictora ${process.env.EMAIL_FROM}`;
    this.to = user.email;
  }

  newTransporter() {
    return nodemailer.createTransport({
      service: "SendGrid",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async send(subject, html, text) {
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text,
    };

    await this.newTransporter().sendMail(mailOptions);
  }

  async sendWelcome() {
    const htmlContent = `
      <html>
        <body>
          <h1>Welcome to Pictora, ${this.firstName}!</h1>
          <p>Thank you for registering. Start by making your first post!</p>
          <p>Best regards, <br /> Pictora Team</p>
        </body>
      </html>
    `;

    const text = convert(htmlContent);

    await this.send("Welcome to the Pictora!", htmlContent, text);
  }
}
