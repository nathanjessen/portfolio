import { Metadata } from 'next/types';
import User from '../constants/User';
import { projects } from '../constants/projects';
import { services } from '../constants/services';
import { testimonials } from '../constants/testimonials';
import { getLatestRepos } from '../lib/getLatestRepos';
import HomeHero from '../components/HomeHero';
import { Repository } from '../constants/repo';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  description: `${User.name} is a Senior Frontend Developer specializing in React, TypeScript, and modern web technologies. Based in ${User.location}.`,
  openGraph: {
    title: `${User.name} - Senior Frontend Developer`,
    description: `${User.name} is a Senior Frontend Developer specializing in React, TypeScript, and modern web technologies. Based in ${User.location}.`,
  },
};

const HomePage = async () => {
  const featuredItems = projects.filter((project) => project.featured);
  const repositories: Repository[] = User.githubUsername
    ? await getLatestRepos(User.githubUsername)
    : [];

  return (
    <>
      <HomeHero />
      <HomeContent
        featuredItems={featuredItems.slice(0, 3)}
        repositories={repositories}
        services={services}
        testimonials={testimonials}
      />
    </>
  );
};

export default HomePage;
