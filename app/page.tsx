import { Metadata } from 'next/types';
import User from '../constants/User';
import { projects } from '../constants/projects';
import BasicGrid from '../components/BasicGrid';
import HomeHero from '../components/HomeHero';
import ProjectCard from '../components/ProjectCard';

export const metadata: Metadata = {
  description: `${User.name} is a Senior Software Engineer building AI-native developer tools with React, TypeScript, and Next.js. Based in ${User.location}.`,
  openGraph: {
    title: `${User.name} - Senior Software Engineer`,
    description: `${User.name} is a Senior Software Engineer building AI-native developer tools with React, TypeScript, and Next.js. Based in ${User.location}.`,
  },
};

const HomePage = () => {
  const featuredItems = projects.filter((project) => project.featured);

  return (
    <>
      <HomeHero />

      <div className='pt-4 pb-8 lg:pt-12 lg:pb-16'>
        <BasicGrid
          title='Portfolio'
          subtitle='Featured Projects'
          divider={false}
          items={featuredItems.slice(0, 3)}
          render={(item, idx) => <ProjectCard item={item} key={idx} />}
        />
      </div>
    </>
  );
};

export default HomePage;
