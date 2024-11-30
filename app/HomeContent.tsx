'use client';

import BasicGrid from '../components/BasicGrid';
import ProjectCard from '../components/ProjectCard';
import RepoCard from '../components/RepoCard';
import ServiceItem from '../components/ServiceItem';
import Testimonials from '../components/Testimonials';
import { Project } from '../constants/projects';
import { Repository } from '../constants/repo';
import { Service } from '../constants/services';
import { Testimonial } from '../constants/testimonials';

interface HomeContentProps {
  featuredItems: Project[];
  repositories: Repository[];
  services: Service[];
  testimonials: Testimonial[];
}

export default function HomeContent({
  featuredItems,
  repositories,
  services,
  testimonials,
}: HomeContentProps) {
  return (
    <>
      <div className='pt-4 pb-8 lg:pt-12 lg:pb-16'>
        <BasicGrid
          title='Portfolio'
          subtitle='Featured Projects'
          divider={false}
          items={featuredItems}
          render={(item, idx) => <ProjectCard key={idx} item={item} />}
        />
      </div>

      <div className='pt-4 pb-8 lg:pt-12 lg:pb-16'>
        <BasicGrid
          title='GitHub'
          subtitle='Latest Code'
          items={repositories}
          render={(item, idx) => <RepoCard key={idx} item={item} index={idx} />}
        />
      </div>

      <div className='pt-4 pb-8 lg:pt-12 lg:pb-16'>
        <BasicGrid
          title='Services'
          subtitle='What I Do'
          items={services}
          render={(item, idx) => <ServiceItem key={idx} item={item} />}
        />
      </div>

      <div className='pt-4 pb-8 lg:pt-12 lg:pb-16'>
        <Testimonials testimonials={testimonials} />
      </div>
    </>
  );
}
