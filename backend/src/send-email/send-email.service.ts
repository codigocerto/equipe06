import { Injectable } from '@nestjs/common';
import { SendEmailDTO } from './dto/SendEmail.dto';
import * as sgMail from '@sendgrid/mail';
import * as nodemailer from 'nodemailer';


@Injectable()
export class SendEmailService {
  private transporter;
  constructor(){
      this.transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'adah.robel@ethereal.email',
            pass: 'PyQg3RAFuZ5AyCpKZX'
        }
      })
    
  }

  

  // async sendEmail(emailDto : SendEmailDTO , vaga? : string) {
  //         const msg = {
  //         to: emailDto.email,
  //         from: process.env.EMAIL_USER,
  //         subject: 'Formulário Recebido',
  //         text: `Olá ${emailDto.name},Recebemos o seu formulário:${emailDto.content || vaga}Obrigado!`,
  //       };

  //       try {
  //         await sgMail.send(msg)
  //       } catch (error) {
  //         console.error('Error sending email:', error.response ? error.response.body : error.message);
  //         throw new Error('Error send email')
  //       }
  //   }

  async sendEmail(to: string, subject: string, text: string, html?: string){
    const mailOptions = {
      from: '',
      to : '',
      subject: '',
      text: '',
      html: '',
    };
    return this.transporter.sendEmail(mailOptions)
  }
}
