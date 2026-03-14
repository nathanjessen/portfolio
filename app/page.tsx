import { Metadata } from 'next/types';
import User from '../constants/User';
import { projects } from '../constants/projects';
import BasicGrid from '../components/BasicGrid';
import HomeHero from '../components/HomeHero';
import ProjectCard from '../components/ProjectCard';
import AboutMe from '../components/AboutMe';
import { Container } from '../components/Layouts/Container';

export const metadata: Metadata = {
  description: `${User.name} is an AI-native engineer shipping production software with Next.js and agentic workflows. Based in ${User.location}.`,
  openGraph: {
    title: `${User.name} - AI-Native Engineer`,
    description: `${User.name} is an AI-native engineer shipping production software with Next.js and agentic workflows. Based in ${User.location}.`,
  },
};

const HomePage = () => {
  const featuredItems = projects.filter((project) => project.featured);

  return (
    <>
      <HomeHero />

      <div className='pt-4 pb-8 lg:pt-12 lg:pb-16'>
        <BasicGrid
          title='Featured Projects'
          divider={false}
          items={featuredItems.slice(0, 3)}
          render={(item, idx) => <ProjectCard item={item} key={idx} />}
        />
      </div>

      <Container>
        <div className='pt-12'>
          <AboutMe />
        </div>
      </Container>
    </>
  );
};

export default HomePage;
