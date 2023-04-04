import Image from 'next/image';
import Link from 'next/link';

export interface BrandProps {
  name: string;
  position?: string;
  avatarUrl?: string;
}

export const Brand = ({ name, position, avatarUrl }: BrandProps) => {
  return (
    <Link href='/' aria-label='Home' className='flex items-center'>
      {avatarUrl && (
        <div className='mr-4 w-10 flex items-center'>
          <Image src={avatarUrl} alt={name} width={40} height={40} />
        </div>
      )}

      <div>
        <p className='font-semibold text-xl text-white'>{name}</p>
        {position && <p className='text-base font-light'>{position}</p>}
      </div>
    </Link>
  );
};
