export interface UserProps {
  name: string;
  position?: string;
  username?: string;
  avatarUrl?: string;
  githubUsername?: string;
  email?: string;
  phone?: string;
  location?: string;
  resumeUrl?: string;
  resumeName?: string;
}

const User: UserProps = {
  name: 'Nathan Jessen',
  position: 'Senior Software Engineer',
  username: 'N10N',
  avatarUrl: '/assets/images/avatar-person.png',
  githubUsername: 'nathanjessen',
  email: 'nathan.jessen@gmail.com',
  phone: '+1 7023017036',
  location: 'Austin, TX',
  resumeUrl: '/assets/Nathan-Jessen-Resume-Frontend-Developer.pdf',
  resumeName: 'Nathan-Jessen-Resume-Frontend-Developer.pdf',
};

export default User;
