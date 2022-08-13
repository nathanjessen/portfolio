import { NextPage } from 'next/types';
import { useMemo } from 'react';
import { projects } from '../constants/projects';
import User from '../constants/User';
// import { services } from '../constants/services';
import BasicGrid from '../components/BasicGrid';
import { testimonials } from '../constants/testimonials';
import { getLatestRepos } from '../lib/getLatestRepos';
// import CallToAction from '../components/CallToAction';
import HomeHero from '../components/HomeHero';
import { DefaultLayout } from '../components/Layouts/DefaultLayout';
import ProjectCard from '../components/ProjectCard';
import RepoCard from '../components/RepoCard';
// import ServiceItem from '../components/ServiceItem';
import Testimonials from '../components/Testimonials';
import { Repository } from '../constants/repo';

export interface HomePageProps {
  repositories: Repository[];
}
const HomePage: NextPage<HomePageProps> = ({ repositories }) => {
  const featuredItems = useMemo(
    () => projects.filter((project) => project.featured),
    []
  );

  return (
    <DefaultLayout
      title='Nathan Jessen - Senior Frontend Developer'
      description='This is my portfolio as a Senior Frontend Developer based in Austin.'>
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

      <div className='pt-4 pb-8 lg:pt-12 lg:pb-16'>
        <BasicGrid
          title='GitHub'
          subtitle='Latest Code'
          items={repositories}
          render={(item, idx) => <RepoCard item={item} key={idx} />}
        />
      </div>

      {/* <div className='pt-4 pb-8 lg:pt-12 lg:pb-16'>
        <BasicGrid
          title='Services'
          subtitle='Work Offered'
          items={services}
          render={(item, idx) => <ServiceItem item={item} key={idx} />}
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
