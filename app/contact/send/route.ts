import mail from '@sendgrid/mail';
import { NextResponse } from 'next/server';
import User from '../../../constants/User';

mail.setApiKey(process.env.SENDGRID_API_KEY || '');

type ResponseData = {
  status: 'success' | 'error';
  message: string;
};

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactFormData;

    // Input validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({
        status: 'error',
        message: 'All fields are required',
      } as ResponseData, { status: 400 });
    }

    if (!body.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return NextResponse.json({
        status: 'error',
        message: 'Invalid email address',
      } as ResponseData, { status: 400 });
    }

    const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
    `;

    const data: mail.MailDataRequired = {
      to: User.email,
      from: {
        email: 'hello@nathanjessen.com',
        name: 'Portfolio Contact Form'
      },
      subject: 'Portfolio Contact Message via Sendgrid',
      text: message,
      html: message.replace(/\r\n/g, '<br>'),
    };

    await mail.send(data);

    return NextResponse.json({
      status: 'success',
      message: "Your message was sent. I'll be in contact shortly.",
    } as ResponseData);

  } catch (error) {
    console.error('SendGrid Error:', error);
    return NextResponse.json({
      status: 'error',
      message: 'Failed to send message. Please try again later.',
    } as ResponseData, { status: 500 });
  }
}
