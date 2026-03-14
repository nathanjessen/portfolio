import Script from 'next/script';
import { Metadata, Viewport } from 'next';
import { PropsWithChildren } from 'react';
import { SkipLink } from '../components/common/SkipLink';
import '../styles/globals.css';

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
    default: 'Nathan Jessen - AI-Native Engineer',
    template: '%s | Nathan Jessen',
  },
  description:
    'AI-native engineer shipping production software with Next.js and agentic workflows.',
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
    title: 'Nathan Jessen - AI-Native Engineer',
    description:
      'AI-native engineer shipping production software with Next.js and agentic workflows.',
    locale: 'en-US',
    url: '/',
    siteName: 'Nathan Jessen',
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
    <html lang='en-US' className='dark'>
      <head>
        <link type='text/plain' rel='author' href='humans.txt' />
        <link rel='preconnect' href='//www.google-analytics.com' />
      </head>
      <body className='min-h-screen flex flex-col bg-base-100 text-base-content bg-grid-primary/[0.02] bg-[size:20px_20px]'>
          <SkipLink />
          <main
            id='main-content'
            className='flex-1'
            role='main'
            tabIndex={-1}
          >
            {children}
            <div className='pb-20' />
          </main>
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
