import { Project } from '../../constants/projects';

export interface ProjectCardBasicProps {
  item: Project;
}

export const ProjectCardBasic = ({ item }: ProjectCardBasicProps) => {
  return (
    <div className='group relative overflow-hidden rounded-xl bg-base-200 card-hover h-full'>
      <div className='p-6 space-y-4'>
        <div>
          <h3 className='text-lg font-medium text-base-content group-hover:text-primary transition-colors duration-300'>
            {item.url ? (
              <a
                href={item.url}
                target='_blank'
                rel='noreferrer'
                className='flex items-center justify-between'
              >
                {item.title}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4 text-primary/90'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
                  <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
                </svg>
              </a>
            ) : (
              item.title
            )}
          </h3>
          {item.client && (
            <p className='text-sm text-base-content/60 mt-1'>
              Client: {item.client}
            </p>
          )}
        </div>
        <p className='text-base text-base-content/80 leading-relaxed'>
          {item.desc}
        </p>
        <div className='flex gap-2 flex-wrap'>
          {item.tech.map((tech, idx) => (
            <span
              key={idx}
              className='inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary/90 transition-colors duration-300'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
