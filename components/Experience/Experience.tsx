import { experience } from '../../constants/experience';
import { ExperienceCard } from './ExperienceCard';

export const Experience = () => {
  return (
    <section className='py-12'>
      <div className='mt-12 max-w-xl mx-auto'>
        {experience.map((exp, idx) => (
          <div key={idx}>
            <ExperienceCard
              title={exp.title}
              desc={exp.desc}
              year={exp.year}
              company={exp.company}
              companyLink={exp.companyLink}
            />
            {idx === experience.length - 1 ? null : (
              <div className='divider-container flex flex-col items-center -mt-2'>
                <div className='w-4 h-4 bg-success rounded-full relative z-10'>
                  <div className='w-4 h-4 bg-success rounded-full relative z-10 animate-ping'></div>
                </div>
                <div className='w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2'></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
