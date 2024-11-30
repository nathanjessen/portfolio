import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '../components/Layouts/Container';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'Sorry, the page you are looking for does not exist.',
  robots: 'noindex, nofollow',
};

export default function NotFound() {
  return (
    <Container>
      <div className='flex flex-col items-center justify-center min-h-[50vh] text-center'>
        <h1 className='text-6xl font-bold'>404</h1>
        <p className='text-xl mt-4'>Page Not Found</p>
        <p className='mt-2'>
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          href='/'
          className='mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors'
        >
          Return Home
        </Link>
      </div>
    </Container>
  );
}
