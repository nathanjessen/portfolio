export interface ExperienceCardProps {
  title?: string;
  desc?: string;
  year?: string;
  company?: string;
  companyLink?: string;
}

export const ExperienceCard = ({ title, desc, year, company, companyLink }: ExperienceCardProps) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-slate-800 z-10">
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="absolute -top-10 md:-left-10 text-4xl text-slate-500 font-bold">
        {year}
      </p>
      <a href={companyLink} target="_blank" rel="noreferrer" className="link link-hover">
        {company}
      </a>
      <p className="my-2">{desc}</p>
    </div>
  );
};
