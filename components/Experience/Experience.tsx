import { experience } from "../../constants/experience";
import { ExperienceCard } from "./ExperienceCard";

export const Experience = () => {
  return (
    <section className="max-w-6xl mx-auto py-20">
      <h1 className="text-3xl md:text-6xl font-bold text-center md:text-left">
        Experience
      </h1>

      <div className="mt-20 max-w-xl mx-auto">
        {experience.map((exp, idx) => (
          <>
            <ExperienceCard
              key={idx}
              title={exp.title}
              desc={exp.desc}
              year={exp.year}
              company={exp.company}
              companyLink={exp.companyLink}
            />
            {idx === experience.length - 1 ? null : (
              <div className="divider-container flex flex-col items-center -mt-2">
                <div className="w-4 h-4 bg-success rounded-full relative z-10">
                  <div className="w-4 h-4 bg-success rounded-full relative z-10 animate-ping"></div>
                </div>
                <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
              </div>
            )}
          </>
        ))}
      </div>
    </section>
  );
};
