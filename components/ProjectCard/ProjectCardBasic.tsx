import { Project } from '../../constants/projects';

export interface ProjectCardBasicProps {
  item: Project;
}

export const ProjectCardBasic = ({ item }: ProjectCardBasicProps) => {
  return (
    <div className='card card-compact bg-base-200 shadow-xl w-full'>
      <div className='card-body'>
        <div>
          <h3 className='text-base-content text-lg'>
            {item.url ? (
              <a
                href={item.url}
                target='_blank'
                rel='noreferrer'
                className='link link-hover flex items-center justify-between'
              >
                {item.title}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-white'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
                  <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
                </svg>
              </a>
            ) : (
              <>{item.title}</>
            )}
          </h3>
          {item.client && <p className='text-base-content/80'>{item.client}</p>}
        </div>
        <p className='mt-2 text-base-content/80'>{item.desc}</p>
        <div className='flex gap-2 mt-2 flex-wrap'>
          {item.tech.map((tech, idx) => (
            <span className='badge badge-primary' key={idx}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
