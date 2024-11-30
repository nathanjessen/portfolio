export interface ExperienceCardProps {
  title: string;
  desc?: string;
  year?: string;
  company?: string;
  companyLink?: string;
}

export const ExperienceCard = ({
  title,
  desc,
  year,
  company,
  companyLink,
}: ExperienceCardProps) => {
  return (
    <div className='relative experience-card border p-4 rounded-md shadow-xl bg-base-200 z-10'>
      <h3 className='font-semibold text-xl text-base-content'>{title}</h3>
      {year && (
        <p className='absolute -top-10 md:-left-10 text-4xl text-base-content/50 font-bold'>
          {year}
        </p>
      )}
      {company && companyLink && (
        <a
          href={companyLink}
          target='_blank'
          rel='noreferrer'
          className='link link-hover text-base-content/80'
        >
          {company}
        </a>
      )}
      {company && !companyLink && (
        <span className='text-base-content/80'>{company}</span>
      )}
      {desc && <p className='my-2 text-base-content/80'>{desc}</p>}
    </div>
  );
};
