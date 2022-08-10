import { Repository } from '../../pages';

export interface RepoCardProps {
  repo?: Repository;
}

export const RepoCard = ({ repo }: RepoCardProps) => {
  return (
    <div className='space-y-4'>
      <h4 className='font-semibold text-xl'>{repo.name}</h4>
      <p>{repo.description}</p>
      <a
        href={repo.clone_url}
        target='_blank'
        rel='noreferrer'
        className='font-semibold group flex flex-row space-x-2 w-full items-center'>
        View Repository
        <span className='transform group-hover:translate-x-2 transition duration-300'>
          &rarr;
        </span>
      </a>
    </div>
  );
};
