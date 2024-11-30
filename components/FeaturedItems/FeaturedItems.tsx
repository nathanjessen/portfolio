import { ReactNode } from 'react';

export interface FeaturedItemsProps<Item> {
  title: string;
  subtitle: string;
  items: Item[];
  render: (item: Item) => ReactNode;
}

export const FeaturedItems = <Item extends unknown>({
  title,
  subtitle,
  items,
  render,
}: FeaturedItemsProps<Item>) => {
  return (
    <div className='py-20 relative bg-base-300'>
      <div className='absolute inset-0'>
        <div className='bg-base-300 h-1/3 sm:h-2/3'></div>
      </div>
      <div className='relative'>
        <h2 className='text-xl md:text-2xl font-medium text-primary'>
          {title}
        </h2>
        <p className='text-3xl leading-tight tracking-wider uppercase text-base-content font-extrabold mt-2'>
          {subtitle}
        </p>
        <ul className='mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
          {items.map((featured, idx) => (
            <li className='col-span-1 flex' key={idx}>
              {render(featured)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
