import { useMemo } from 'react';
import { NextPage } from 'next/types';
import User from '../constants/User';
import { projects } from '../constants/projects';
// import { services } from '../constants/services';
import { testimonials } from '../constants/testimonials';
import { getLatestRepos } from '../lib/getLatestRepos';
import BasicGrid from '../components/BasicGrid';
// import CallToAction from '../components/CallToAction';
import HomeHero from '../components/HomeHero';
import DefaultLayout from '../components/Layouts/DefaultLayout';
import ProjectCard from '../components/ProjectCard';
import RepoCard from '../components/RepoCard';
// import ServiceItem from '../components/ServiceItem';
import Testimonials from '../components/Testimonials';

export type Repository = any;

const HomePage: NextPage<{ repositories: Repository[]; }> = ({ repositories }) => {
  const featuredItems = useMemo(() => projects.filter(project => project.featured), []);

  return (
    <DefaultLayout
      title="Nathan Jessen - Senior Frontend Developer"
      description="This is my portfolio as a Senior Frontend Developer based in Austin."
    >
      <HomeHero />

      <div className="pt-4 pb-8 lg:pt-12 lg:pb-16">
        <BasicGrid
          title="Portfolio"
          subtitle="Featured Projects"
          divider={false}
          items={featuredItems.slice(0, 3)}
          render={(item, idx) => <ProjectCard item={item} key={idx} />}
        />
      </div>

      <div className="pt-4 pb-8 lg:pt-12 lg:pb-16">
        <BasicGrid
          title="GitHub"
          subtitle="Latest Code"
          items={repositories}
          render={(item, idx) => <RepoCard repo={item} key={idx} />}
        />
      </div>

      {/* <div className="pt-4 pb-8 lg:pt-12 lg:pb-16">
        <BasicGrid
          title="Services"
          subtitle="Work Offered"
          items={services}
          render={(item, idx) => <ServiceItem service={item} key={idx} />}
        />
      </div> */}

      <Testimonials testimonials={testimonials} />
      {/* <CallToAction /> */}
    </DefaultLayout>
  );
};

export default HomePage;

export const getServerSideProps = async () => {
  if (!User.githubUsername) return {};

  const repositories = await getLatestRepos(User.githubUsername);

  return {
    props: {
      repositories,
    },
  };
};
