import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang='en-US'>
      <Head />
      <body className='h-screen flex flex-col'>
        <Main />
        <NextScript />
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
    </Html>
  );
}
