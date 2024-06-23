import { Injectable } from '@nestjs/common';
import { SendEmailDTO } from './dto/SendEmail.dto';
import * as sgMail from '@sendgrid/mail';
import * as nodemailer from 'nodemailer';


@Injectable()
export class SendEmailService {
  private transporter;
  constructor(){
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

   async sendEmail(emailDto : SendEmailDTO , vaga? : string) {
      const msg = {
        to: emailDto.email,
        from: process.env.EMAIL_USER,
        subject: 'Formulário Recebido',
        text: `Olá ${emailDto.name},Recebemos o seu formulário: ${emailDto.content || vaga}Obrigado!`,
      };

    sgMail.send(msg)
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

}
