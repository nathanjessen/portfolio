import Image from 'next/image';
import { Project } from '../../constants/projects';

export interface ProjectCardProps {
  item: Project;
}

const css = { width: '100%', height: 'auto' };
export const ProjectCard = ({ item }: ProjectCardProps) => {
  return (
    <div className='card bg-base-200 shadow-xl divide-y divide-base-100 w-full'>
      {item.img && (
        <figure className='bg-base-300 rounded-t-md'>
          <div className='block h-60 w-full overflow-hidden'>
            <Image
              src={item.img}
              alt={`Screenshot of ${item.title} project`}
              sizes='100vw'
              height={240}
              width={400}
              style={css}
              className='object-cover transition-transform hover:scale-105'
            />
          </div>
        </figure>
      )}

      <div className='card-body'>
        <h5 className='card-title text-base-content'>{item.title}</h5>
        <p className='text-base-content/80'>{item.desc}</p>

        <div className='flex gap-2 mt-2 flex-wrap'>
          {item.tech.map((tech, idx) => (
            <span
              className='badge badge-primary text-base-100'
              key={idx}
              title={`Built with ${tech}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className='flex divide-x divide-base-100'>
        {item.source != null && (
          <div className='flex-1'>
            <a
              href={item.source}
              target='_blank'
              rel='noreferrer'
              className='btn btn-ghost text-xs py-4 h-14 btn-block rounded-tr-none rounded-bl-none rounded-tl-none hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors'
              aria-label={`View source code for ${item.title}`}
            >
              <svg
                className='w-4 h-4 text-white'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='ml-3'>Code</span>
            </a>
          </div>
        )}

        {item.docs != null && (
          <div className='flex-1'>
            <a
              href={item.docs}
              target='_blank'
              rel='noreferrer'
              className='btn btn-ghost text-xs py-4 h-14 btn-block rounded-none hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors'
              aria-label={`View documentation for ${item.title}`}
            >
              <svg
                className='w-4 h-4 text-white'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z'
                  clipRule='evenodd'
                />
                <path d='M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z' />
              </svg>
              <span className='ml-3'>Docs</span>
            </a>
          </div>
        )}

        {item.url != null && (
          <div className='flex-1'>
            <a
              href={item.url}
              target='_blank'
              rel='noreferrer'
              className='btn btn-ghost text-xs py-4 h-14 btn-block rounded-bl-none rounded-br-none hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors'
              aria-label={`Visit website for ${item.title}`}
            >
              <svg
                className='w-4 h-4 text-white'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='ml-3'>Website</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
