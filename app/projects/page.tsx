'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';
import BasicGrid from '../../components/BasicGrid';
import { Container } from '../../components/Layouts/Container';
import PageHeading from '../../components/PageHeading';
import ProjectCard from '../../components/ProjectCard';
import { ProjectCardBasic } from '../../components/ProjectCard/ProjectCardBasic';
import { projects } from '../../constants/projects';

const ProjectsPage = () => {
  const featuredItems = useMemo(
    () =>
      projects.filter(
        (project) => project.featured && project.published !== false
      ),
    []
  );
  const archivedItems = useMemo(
    () =>
      projects.filter(
        (project) => project.archived && project.published !== false
      ),
    []
  );

  return (
    <>
      <PageHeading>Projects</PageHeading>

      <Container>
        <div className='space-y-16 py-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BasicGrid
              title='Featured Work'
              subtitle='A collection of my recent projects and experiments'
              divider={false}
              items={featuredItems}
              render={(item, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <ProjectCard item={item} key={idx} />
                </motion.div>
              )}
              showFilters={false}
            />
          </motion.div>

          {archivedItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <BasicGrid
                title='Archive'
                subtitle='Past projects and experiments'
                divider={false}
                items={archivedItems}
                render={(item, idx) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <ProjectCardBasic item={item} key={idx} />
                  </motion.div>
                )}
                showFilters={true}
              />
            </motion.div>
          )}
        </div>
      </Container>
    </>
  );
};

export default ProjectsPage;
