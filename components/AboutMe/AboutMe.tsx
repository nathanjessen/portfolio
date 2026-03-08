import Link from 'next/link';
import User from '../../constants/User';
import { socialLinks } from '../../constants/socialLinks';
import TechList from '../TechList';

export const AboutMe = () => {
  return (
    <section>
      <p className='text-2xl md:text-4xl font-semibold px-8'>
        I&apos;m a senior software engineer building AI-powered products with
        React, TypeScript, and Next.js — and using agentic tools to ship faster.
      </p>

      <div className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-20'>
        <div>
          <div>
            <h2 className='text-xl font-semibold'>Contact</h2>
            <p className='text-lg mt-4'>
              I&apos;d love to hear from you or answer any questions you may
              have. Reach out using the{' '}
              <Link href='/contact' className='link link-primary font-bold'>
                Contact
              </Link>{' '}
              page.
            </p>
          </div>

          <div className='mt-8'>
            <h2 className='text-xl font-semibold'>Resume</h2>
            <p className='text-lg mt-4'>
              Interested in working together?{' '}
              {User.resumeUrl && (
                <>
                  Check out my{' '}
                  <a
                    href={User.resumeUrl}
                    download={User.resumeName}
                    target='_blank'
                    rel='noreferrer'
                    className='link link-primary font-bold'
                  >
                    Resume
                  </a>{' '}
                  and{' '}
                </>
              )}
              <Link href='/contact' className='link link-primary font-bold'>
                get in touch
              </Link>
              .
            </p>
          </div>

          <div className='mt-8'>
            <h2 className='text-xl font-semibold'>Social Links</h2>
            <div className='mt-4 ml-4'>
              {socialLinks.facebook && (
                <div className='flex flex-row justify-start items-center'>
                  <a
                    href={socialLinks.facebook}
                    className='flex flex-row items-center space-x-4 group py-2'
                  >
                    <span>&rarr;</span>
                    <p className='text-lg relative overflow-hidden'>
                      <span className='absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300'></span>
                      Facebook
                    </p>
                  </a>
                </div>
              )}

              {socialLinks.twitter && (
                <div className='flex flex-row justify-start items-center'>
                  <a
                    href={socialLinks.twitter}
                    className='flex flex-row items-center space-x-4 group py-2'
                  >
                    <span>&rarr;</span>
                    <p className='text-lg relative overflow-hidden'>
                      <span className='absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300'></span>
                      Twitter
                    </p>
                  </a>
                </div>
              )}

              {socialLinks.github && (
                <div className='flex flex-row justify-start items-center'>
                  <a
                    href={socialLinks.github}
                    className='flex flex-row items-center space-x-4 group py-2'
                  >
                    <span>&rarr;</span>
                    <p className='text-lg relative overflow-hidden'>
                      <span className='absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300'></span>
                      GitHub
                    </p>
                  </a>
                </div>
              )}

              {socialLinks.linkedin && (
                <div className='flex flex-row justify-start items-center'>
                  <a
                    href={socialLinks.linkedin}
                    className='flex flex-row items-center space-x-4 group py-2'
                  >
                    <span>&rarr;</span>
                    <p className='text-lg relative overflow-hidden'>
                      <span className='absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300'></span>
                      LinkedIn
                    </p>
                  </a>
                </div>
              )}

              {socialLinks.instagram && (
                <div className='flex flex-row justify-start items-center'>
                  <a
                    href={socialLinks.instagram}
                    className='flex flex-row items-center space-x-4 group py-2'
                  >
                    <span>&rarr;</span>
                    <p className='text-lg relative overflow-hidden'>
                      <span className='absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300'></span>
                      Instagram
                    </p>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className='col-span-1 md:col-span-2'>
          <div className='space-y-4'>
            <p className='text-xl'>
              I&apos;ve been building frontend applications professionally for
              over 13 years. Over the past year I&apos;ve shifted toward
              AI-augmented engineering — using Claude and Codex to accelerate
              development workflows, prototype products rapidly, and ship
              reliable software faster than traditional approaches allow.
            </p>
            <p className='text-xl'>
              At A Place for Mom I&apos;ve contributed to a high-traffic Next.js
              platform and helped ship two AI-powered products: a B2C
              care-finder and a B2B platform connecting home care agencies with
              care-seekers via voice AI and Twilio. Both went from prototype to
              production in under three months.
            </p>
            <p className='text-xl'>
              I&apos;m focused on growing toward Staff and Principal engineering
              with an emphasis on agentic systems — building tools that use LLMs
              not just as assistants but as active participants in product
              workflows.
            </p>
          </div>

          <div className='mt-6'>
            <h2 className='bg-primary text-3xl rounded-md px-3 inline-block font-medium mb-6'>
              Tech Stack
            </h2>
            <TechList />
          </div>
        </div>
      </div>
    </section>
  );
};
