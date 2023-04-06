import User from '../constants/User';
import { projects } from '../constants/projects';
// import { services } from '../constants/services';
import BasicGrid from '../components/BasicGrid';
import { testimonials } from '../constants/testimonials';
import { getLatestRepos } from '../lib/getLatestRepos';
// import CallToAction from '../components/CallToAction';
import HomeHero from '../components/HomeHero';
import ProjectCard from '../components/ProjectCard';
import RepoCard from '../components/RepoCard';
// import ServiceItem from '../components/ServiceItem';
import Testimonials from '../components/Testimonials';
import { Repository } from '../constants/repo';

const HomePage = async () => {
  const featuredItems = projects.filter((project) => project.featured);

  const repositories: Repository[] = User.githubUsername
    ? await getLatestRepos(User.githubUsername)
    : [];

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
    </>
  );
};

export default HomePage;
