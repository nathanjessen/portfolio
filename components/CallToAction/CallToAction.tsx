import { socialLinks } from '../../constants/socialLinks';

export const CallToAction = () => {
  return (
    <div className='bg-primary'>
      <div className='max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8 lg:flex lg:items-center lg:justify-between'>
        <h2 className='text-3xl leading-9 font-extrabold tracking-tight text-primary-content sm:text-4xl sm:leading-10'>
          Have a request?
          <br />
          <span className='text-primary-content'>Reach out to me.</span>
        </h2>
        {(socialLinks.twitter || socialLinks.linkedin) && (
          <div className='mt-8 lg:mt-0 flex lg:flex-shrink-0 gap-3'>
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target='_blank'
                rel='noreferrer'
                className='btn btn-info text-info-content hover:bg-info-focus focus:ring-2 focus:ring-info-content/20'
                aria-label='Connect on Twitter'
              >
                Twitter
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target='_blank'
                rel='noreferrer'
                className='btn btn-secondary hover:bg-secondary-focus focus:ring-2 focus:ring-secondary-content/20'
                aria-label='Connect on LinkedIn'
              >
                LinkedIn
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
