import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request) {
  const { email, firstName, lastName, subject, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_EMAIL_SECRET,
    },
  });

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `🕸️ Message from ${`${firstName} ${lastName}`} (${email})`,
    text: `Subject: ${subject}.\n\n${message}`,
  };

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, (err) => !err ? resolve('Email Sent') : reject(err.message));
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Thanks so much for getting in touch! I\'ve received your message and will be in touch soon. 😊' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
