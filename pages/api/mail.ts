// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import mail from "@sendgrid/mail";
import User from '../../constants/User';

mail.setApiKey(process.env.SENDGRID_API_KEY || '');

type Data = {
  status: string;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = JSON.parse(req.body);
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
    html: message.replace(/\r\n/g, '<br>')
  };

  mail.send(data)
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Your message was sent. I'll be in contact shortly.",
      });
    })
    .catch((error) => {
      res.status(200).json({
        status: "error",
        message: `Message failed to send with error, ${error}`,
      });
    });
}
