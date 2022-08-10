import Image from 'next/image';
import { Project } from '../../constants/projects';

export interface ProjectCardProps {
  item: Project;
}

export const ProjectCard = ({ item }: ProjectCardProps) => {
  return (
    <div className='card bg-base-200 shadow-xl divide-y divide-base-100 w-full'>
      {item.img && (
        <figure
          className='flex items-center justify-center bg-gray-100 bg-cover bg-top bg-no-repeat rounded-t-md h-60'
          style={{ backgroundImage: `url(${item.img})` }}>
          <Image
            src={item.img}
            alt='{item.title }'
            className='h-60 w-full hidden'
            height={240}
            width={400}
          />
        </figure>
      )}

      <div className='card-body'>
        <h5 className='card-title text-white'>{item.title}</h5>
        <p>{item.desc}</p>

        <div className='flex gap-2 mt-2 flex-wrap'>
          {item.tech.map((tech, idx) => (
            <span className='badge badge-primary' key={idx}>
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
              className='btn btn-ghost text-xs py-4 h-14 btn-block rounded-tr-none rounded-bl-none rounded-tl-none'>
              <svg
                className='w-4 h-4 text-base-content'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'>
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
              className='btn btn-ghost text-xs py-4 h-14 btn-block rounded-none'>
              <svg
                className='w-4 h-4 text-base-content'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'>
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
              className='btn btn-ghost text-xs py-4 h-14 btn-block rounded-tl-none rounded-tr-none rounded-br-none'>
              <svg
                className='w-4 h-4 text-base-content'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'>
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
