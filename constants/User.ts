export interface UserProps {
  name: string;
  position?: string;
  location?: string;
}

const User: UserProps = {
  name: 'Nathan Jessen',
  position: 'AI-Native Engineer',
  location: 'Austin, TX',
};

export default User;
