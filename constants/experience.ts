export interface Experience {
  title: string;
  company: string;
  year: string;
  companyLink?: string;
  desc: string;
}

export const experience: Experience[] = [
  {
    title: "Actively Interviewing",
    company: "Full-time",
    year: "Current",
    companyLink: "https://nathanjessen.com/contact",
    desc: "Looking for a full-time position as a Senior Frontend Developer working with React, TypeScript, and Storybook.",
  },
  {
    title: "Frontend Developer",
    company: "Freelance",
    year: "2020",
    companyLink: "https://nathanjessen.com",
    desc: "Developed and contributed to crypto apps, NFT marketplaces, and other tools using React, Storybook, and web3 libraries.",
  },
  {
    title: "Technology Specialist",
    company: "VMLY&R",
    year: "2018",
    companyLink: "https://www.vmlyr.com/",
    desc: "Built and documented internal tools, mentored junior team members, and optimized build systems.",
  },
  {
    title: "Technology Associate",
    company: "VMLY&R",
    year: "2015",
    companyLink: "https://www.vmlyr.com/",
    desc: "Themed components for AEM and WordPress while working closely with designers to improve UI and UX for the end user.",
  },
  {
    title: "Web Developer",
    company: "TEKsystems",
    year: "2012",
    companyLink: "https://www.teksystems.com/",
    desc: "Began my career by building responsive mobile-first sites for AEM and fixing bugs with existing applications.",
  },
  {
    title: "Graduation",
    company: "Northwest Missouri State University",
    year: "2011",
    companyLink: "https://nwmissouri.edu/",
    desc: "B.S. in Computer Science. Minors in Mathematics and Database Management Systems.",
  },
];