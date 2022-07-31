export interface Experience {
  title: string;
  company: string;
  year: string;
  companyLink?: string;
  desc: string;
}

export const experience: Experience[] = [
  {
    title: "Frontend Developer",
    company: "Freelance",
    year: "2020",
    companyLink: "https://mroads.com",
    desc: "Developer for web3.",
  },
  {
    title: "Technology Specialist",
    company: "VMLY&R",
    year: "2018",
    companyLink: "https://www.vml.com",
    desc: "Internal tools built.",
  },
  {
    title: "Technology Associate",
    company: "VMLY&R",
    year: "2015",
    companyLink: "https://www.vml.com",
    desc: "Fixed websites.",
  },
  {
    title: "Web Developer",
    company: "TEKsystems",
    year: "2012",
    companyLink: "https://teksystems.com",
    desc: "Contractor for VML.",
  },
  {
    title: "Graduation",
    company: "Northwest Missouri State University",
    year: "2011",
    companyLink: "https://nwmissouri.edu",
    desc: "B.S. in Computer Science with Minors in Mathematics and Database Management Systems.",
  },
];