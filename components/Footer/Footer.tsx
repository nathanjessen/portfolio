import User from '../../constants/User';

export const Footer = () => {
  return (
    <footer className='bg-base-300' role='contentinfo'>
      <div className='max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <p className='text-center text-base leading-6'>
          &copy; {new Date().getFullYear()} {User.name}
        </p>
      </div>
    </footer>
  );
};
