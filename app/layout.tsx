import Script from 'next/script';
import { Metadata, Viewport } from 'next';
import { PropsWithChildren } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { Providers } from './providers';

export const viewport: Viewport = {
  themeColor: '#357edd',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'light dark',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://nathanjessen.com'),
  title: {
    default: 'Nathan Jessen - Senior Frontend Developer',
    template: '%s | Nathan Jessen',
  },
  description:
    'This is my portfolio as a Senior Frontend Developer based in Austin.',
  robots: 'follow, index',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
      type: 'image/x-icon',
    },
  ],
  openGraph: {
    type: 'website',
    title: 'Nathan Jessen - Senior Frontend Developer',
    description:
      'This is my portfolio as a Senior Frontend Developer based in Austin.',
    locale: 'en-US',
    url: '/',
    siteName: 'Nathan Jessen',
    images: [
      {
        url: '/assets/images/avatar-person.png',
        width: 128,
        height: 128,
        alt: 'Nathan Jessen',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Nathan Jessen - Senior Frontend Developer',
    description: 'Senior Frontend Developer based in Austin',
    creator: '@nathanjessen',
    images: ['/assets/images/avatar-person.png'],
  },
  alternates: {
    canonical: '/',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang='en-US' suppressHydrationWarning>
      <head>
        <link type='text/plain' rel='author' href='humans.txt' />
        <link rel='preconnect' href='//www.google-analytics.com' />
      </head>
      <body className='h-screen flex flex-col'>
        <Providers>
          <Navbar />
          <main className='flex-1 pt-24'>{children}</main>
          <Footer />
        </Providers>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
