import { socialLinks } from '../../constants/socialLinks';

export const SocialNav = () => {
  return (
    <ul
      className='inline-flex items-center space-x-4 md:order-2'
      role='list'
      aria-label='Social media links'
    >
      {socialLinks.facebook && (
        <li>
          <a
            href={socialLinks.facebook}
            target='_blank'
            rel='noreferrer'
            className='text-base-content/70 hover:text-base-content focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-2 inline-flex items-center justify-center transition-colors'
            aria-label='Visit my Facebook profile'
          >
            <span className='sr-only'>Facebook</span>
            <svg
              className='h-5 w-5'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                fillRule='evenodd'
                d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                clipRule='evenodd'
              />
            </svg>
          </a>
        </li>
      )}
      {socialLinks.github && (
        <li>
          <a
            href={socialLinks.github}
            target='_blank'
            rel='noreferrer'
            className='text-base-content/70 hover:text-base-content focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-2 inline-flex items-center justify-center transition-colors'
            aria-label='Visit my GitHub profile'
          >
            <span className='sr-only'>GitHub</span>
            <svg
              className='h-5 w-5'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                fillRule='evenodd'
                d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                clipRule='evenodd'
              />
            </svg>
          </a>
        </li>
      )}
      {socialLinks.twitter && (
        <li>
          <a
            href={socialLinks.twitter}
            target='_blank'
            rel='noreferrer'
            className='text-base-content/70 hover:text-base-content focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-2 inline-flex items-center justify-center transition-colors'
            aria-label='Visit my Twitter profile'
          >
            <span className='sr-only'>Twitter</span>
            <svg
              className='h-5 w-5'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                fillRule='evenodd'
                d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84'
              />
            </svg>
          </a>
        </li>
      )}
      {socialLinks.linkedin && (
        <li>
          <a
            href={socialLinks.linkedin}
            target='_blank'
            rel='noreferrer'
            className='text-base-content/70 hover:text-base-content focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-2 inline-flex items-center justify-center transition-colors'
            aria-label='Visit my LinkedIn profile'
          >
            <span className='sr-only'>LinkedIn</span>
            <svg
              className='h-5 w-5'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 28 28'
            >
              <path
                fillRule='evenodd'
                d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z'
              />
            </svg>
          </a>
        </li>
      )}
      {socialLinks.medium && (
        <li>
          <a
            href={socialLinks.medium}
            target='_blank'
            rel='noreferrer'
            className='text-base-content/70 hover:text-base-content focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-2 inline-flex items-center justify-center transition-colors'
            aria-label='Read my articles on Medium'
          >
            <span className='sr-only'>Medium</span>
            <svg
              className='h-5 w-5'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 26 26'
            >
              <path
                fillRule='evenodd'
                d='M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z'
              />
            </svg>
          </a>
        </li>
      )}
      {socialLinks.instagram && (
        <li>
          <a
            href={socialLinks.instagram}
            target='_blank'
            rel='noreferrer'
            className='text-base-content/70 hover:text-base-content focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-2 inline-flex items-center justify-center transition-colors'
            aria-label='Visit my Instagram profile'
          >
            <span className='sr-only'>Instagram</span>
            <svg
              className='h-5 w-5'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                fillRule='evenodd'
                d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                clipRule='evenodd'
              />
            </svg>
          </a>
        </li>
      )}
      {socialLinks.dribbble && (
        <li>
          <a
            href={socialLinks.dribbble}
            target='_blank'
            rel='noreferrer'
            className='text-base-content/70 hover:text-base-content focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-2 inline-flex items-center justify-center transition-colors'
            aria-label='Visit my Dribbble profile'
          >
            <span className='sr-only'>Dribbble</span>
            <svg
              className='h-5 w-5'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                fillRule='evenodd'
                d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z'
                clipRule='evenodd'
              />
            </svg>
          </a>
        </li>
      )}
      {socialLinks.codepen && (
        <li>
          <a
            href={socialLinks.codepen}
            target='_blank'
            rel='noreferrer'
            className='text-base-content/70 hover:text-base-content focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-2 inline-flex items-center justify-center transition-colors'
            aria-label='View my CodePen profile'
          >
            <span className='sr-only'>CodePen</span>
            <svg
              className='h-5 w-5'
              aria-hidden='true'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5'
              />
            </svg>
          </a>
        </li>
      )}
      {socialLinks.angellist && (
        <li>
          <a
            href={socialLinks.angellist}
            target='_blank'
            rel='noreferrer'
            className='text-base-content/70 hover:text-base-content focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-2 inline-flex items-center justify-center transition-colors'
            aria-label='View my AngelList profile'
          >
            <span className='sr-only'>AngelList</span>
            <svg
              className='h-5 w-5'
              aria-hidden='true'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11'
              />
            </svg>
          </a>
        </li>
      )}
    </ul>
  );
};
