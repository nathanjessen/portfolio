import mail from '@sendgrid/mail';
import { NextResponse } from 'next/server';
import User from '../../../constants/User';

mail.setApiKey(process.env.SENDGRID_API_KEY || '');

type ResponseData = {
  status?: string;
  message?: string;
};

export async function POST(request: Request) {
  let response: ResponseData = {};
  const body = await request.json();
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;
  const data = {
    to: User.email,
    from: 'hello@nathanjessen.com',
    subject: 'Portfolio Contact Message via Sendgrid',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  };

  await mail
    .send(data)
    .then(() => {
      response = {
        status: 'success',
        message: "Your message was sent. I'll be in contact shortly.",
      };
    })
    .catch((error) => {
      response = {
        status: 'error',
        message: `Message failed to send with error, ${error}`,
      };
    });

  return NextResponse.json(response);
}
