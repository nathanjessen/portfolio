import Script from 'next/script';
import { PropsWithChildren } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { Providers } from './providers';

export const metadata = {
  title: 'Nathan Jessen - Senior Frontend Developer',
  description:
    'This is my portfolio as a Senior Frontend Developer based in Austin.',
};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang='en-US' suppressHydrationWarning>
      <body className='h-screen flex flex-col'>
        <Providers>
          <Navbar />

          <main className='flex-grow pt-24' aria-label='Content'>
            {children}
          </main>

          <Footer />
        </Providers>

        <Script
          id='google-analytics'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              (function (i, s, o, g, r, a, m) {
                i["GoogleAnalyticsObject"] = r; i[r] = i[r] || function () {
                  (i[r].q = i[r].q || []).push(arguments);
                }, i[r].l = 1 * new Date(); a = s.createElement(o),
                  m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m);
              })(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");
        
              ga("create", "UA-42437510-1", "nathanjessen.github.io");
              ga("set", "anonymizeIp", true);
              ga("send", "pageview");
            `,
          }}
        />
      </body>
    </html>
  );
}
