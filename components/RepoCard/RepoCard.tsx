import { Repository } from '../../constants/repo';

export interface RepoCardProps {
  item?: Repository;
}

export const RepoCard = ({
  item: { name, description, clone_url },
}: RepoCardProps) => {
  return (
    <div className='space-y-4'>
      <h4 className='font-semibold text-xl'>{name}</h4>
      <p>{description}</p>
      <a
        href={clone_url}
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
