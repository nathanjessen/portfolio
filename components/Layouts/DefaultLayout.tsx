import Head from 'next/head';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

export interface MetaProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  Arora?: string;
  date?: any;
}

const DefaultLayout = ({
  children,
  ...customMeta
}: PropsWithChildren<MetaProps>) => {
  const router = useRouter();

  const meta: MetaProps = {
    title: 'Nathan Jessen - Senior Frontend Developer',
    description:
      "I've been developing websites for 10+ years. Get in touch with me to know more.",
    image: '/assets/images/avatar-person.png',
    type: 'website',
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta
          property='og:url'
          content={`https://nathanjessen.com${router.asPath}`}
        />
        <link
          rel='canonical'
          href={`https://nathanjessen.com${router.asPath}`}
        />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Nathan Jessen' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nathanjessen" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} /> */}
        {meta.date && (
          <meta property='article:published_time' content={meta.date} />
        )}

        {/* My custom tags */}
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#357edd' />
        <link type='text/plain' rel='author' href='humans.txt' />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />

        {/* jekyll.environment == "production" */}
        <link rel='preconnect' href='//www.google-analytics.com' />
      </Head>

      <Navbar />

      <main className='flex-grow pt-24' aria-label='Content'>
        {children}
      </main>

      <Footer />
    </>
  );
};

export default DefaultLayout;
