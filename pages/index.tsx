import { useMemo } from 'react';
import type { NextPage } from 'next';
import User from "../constants/User";
import { projects } from '../constants/projects';
// import { services } from '../constants/services';
import { testimonials } from '../constants/testimonials';
import { getLatestRepos } from "../lib/getLatestRepos";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import HomeHero from "../components/HomeHero";
import Testimonials from '../components/Testimonials';
import ProjectCard from '../components/ProjectCard';
// import ServiceItem from '../components/ServiceItem';
import BasicGrid from '../components/BasicGrid';
// import CallToAction from '../components/CallToAction';
import RepoCard from '../components/RepoCard';

export type Repository = any;

const Home: NextPage<{ repositories: Repository[]; }> = ({ repositories }) => {
  const featuredItems = useMemo(() => projects.filter(project => project.featured), []);
  {/* assign recent_posts = site.posts */ }

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

      {/* <RecentPostItems items={posts} /> */}
      {/* <RecentPostCards items={posts} /> */}
      <Testimonials testimonials={testimonials} />
      {/* <CallToAction /> */}
    </DefaultLayout>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const repositories = await getLatestRepos(User);
  // const repositories: Repository[] = [];

  return {
    props: {
      repositories,
    },
  };
};
