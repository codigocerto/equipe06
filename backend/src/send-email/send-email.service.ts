import { Injectable } from '@nestjs/common';
import { SendEmailDTO } from './dto/SendEmail.dto';
import * as sgMail from '@sendgrid/mail';
import * as nodemailer from 'nodemailer';


@Injectable()
export class SendEmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.mailgun.org',
      port: 587,
      secure:false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async sendMail(to: string, subject: string, html: string) {
    const mailOptions = {
      from : process.env.EMAIL_USER,
      to,
      subject,
      html,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent: ', info.response);
    } catch (error) {
      console.error('Error sending email: ', error);
    }
  }

}
