import { useMemo } from 'react';
import type { NextPage } from 'next';
import userData from "../constants/userData";
import { projects } from '../constants/projects';
import { services } from '../constants/services';
import { testimonials } from '../constants/testimonials';
import { getLatestRepos } from "../lib/getLatestRepos";
import ContainerBlock from "../components/Layouts/ContainerBlock";
import FeaturedItems from "../components/FeaturedItems";
import HomeHero from "../components/HomeHero";
import Testimonials from '../components/Testimonials';
import ProjectCard from '../components/ProjectCard';
import ServiceItem from '../components/ServiceItem';
import BasicGrid from '../components/BasicGrid';
import CallToAction from '../components/CallToAction';
import RepoCard from '../components/RepoCard';

export type Repository = any;

const Home: NextPage<{ repositories: Repository[]; }> = ({ repositories }) => {
  const featuredItems = useMemo(() => projects.filter(project => project.featured), []);
  {/* assign recent_posts = site.posts */ }

  return (
    <ContainerBlock
      title="Nathan Jessen - Senior Frontend Developer"
      description="This is my portfolio as a Senior Frontend Developer based in Austin."
    >
      <HomeHero />
      <FeaturedItems
        title="Portfolio"
        subtitle="Featured Projects"
        items={featuredItems.slice(0, 3)}
        render={(item) => <ProjectCard item={item} />}
      />
      <BasicGrid
        title="GitHub"
        subtitle="Latest Code"
        items={repositories}
        render={(item, idx) => <RepoCard repo={item} key={idx} />}
      />
      <BasicGrid
        title="Services"
        subtitle="Work Offered"
        items={services}
        render={(item, idx) => <ServiceItem service={item} key={idx} />}
      />
      {/* <RecentPostItems items={posts} /> */}
      {/* <RecentPostCards items={posts} /> */}
      <Testimonials testimonials={testimonials} />
      <CallToAction />
    </ContainerBlock>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const repositories = await getLatestRepos(userData);
  // const repositories: Repository[] = [];

  return {
    props: {
      repositories,
    },
  };
};
