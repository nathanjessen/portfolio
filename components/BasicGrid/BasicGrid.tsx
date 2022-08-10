import { ReactNode } from 'react';
import Container from '../Layouts/Container';

export interface BasicGridProps<Item> {
  title: string;
  subtitle?: string;
  divider?: boolean;
  items: Item[];
  render: (item: Item, idx: number) => ReactNode;
}

export const BasicGrid = <Item extends unknown>({
  title,
  subtitle,
  divider = true,
  items,
  render,
}: BasicGridProps<Item>) => {
  return (
    <Container>
      <h2 className='text-xl md:text-2xl font-medium text-primary'>{title}</h2>
      <p className='text-3xl leading-tight tracking-wider uppercase text-white font-extrabold mt-2'>
        {subtitle}
      </p>
      {divider && <div className='divider'></div>}
      <div className='mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {items.length > 0 ? (
          items.map(render)
        ) : (
          <p className='text-lg font-semibold text-heading'>
            No items were found.
          </p>
        )}
      </div>
    </Container>
  );
};
