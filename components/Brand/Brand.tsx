import Image from 'next/image';
import Link from 'next/link';

export interface BrandProps {
  name: string;
  position?: string;
  avatarUrl?: string;
}

export const Brand = ({ name, position, avatarUrl }: BrandProps) => {
  return (
    <Link
      href='/'
      aria-label='Home'
      className='flex items-center p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary hover:bg-base-200 transition-colors'
    >
      {avatarUrl && (
        <div className='mr-4 w-10 flex items-center'>
          <Image
            src={avatarUrl}
            alt={`Profile photo of ${name}`}
            width={40}
            height={40}
            className='rounded-full'
          />
        </div>
      )}

      <div>
        <p className='font-semibold text-xl text-base-content'>{name}</p>
        {position && (
          <p className='text-base font-light text-base-content/80'>
            {position}
          </p>
        )}
      </div>
    </Link>
  );
};
