import { Metadata } from 'next';
import User from '../../constants/User';

export const metadata: Metadata = {
  title: 'Projects',
  description: `Explore ${User.name}'s portfolio of web development projects, featuring React, TypeScript, and modern web technologies.`,
  openGraph: {
    title: 'Projects | Nathan Jessen',
    description: `Explore ${User.name}'s portfolio of web development projects, featuring React, TypeScript, and modern web technologies.`,
  },
};
