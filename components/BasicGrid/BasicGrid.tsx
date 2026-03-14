import { ReactNode } from 'react';
import { Container } from '../Layouts/Container';

export interface BasicGridProps<Item> {
  title: string;
  divider?: boolean;
  items: Item[];
  render: (item: Item, idx: number) => ReactNode;
}

export const BasicGrid = <Item extends unknown>({
  title,
  divider = true,
  items,
  render,
}: BasicGridProps<Item>) => {
  return (
    <Container>
      <h2 className='text-3xl leading-tight tracking-wider uppercase text-white font-extrabold'>{title}</h2>
      {divider && (
        <div className='flex items-center gap-4 before:flex-1 before:border-t before:border-white/20 after:flex-1 after:border-t after:border-white/20'></div>
      )}
      <div className='mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {items?.length > 0 ? (
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
