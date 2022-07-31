import { ReactNode } from 'react';

export interface BasicGridProps<Item> {
  title: string;
  subtitle?: string;
  items: Item[];
  render: (item: Item, idx: number) => ReactNode;
}

export const BasicGrid = <Item extends unknown>({ title, subtitle, items, render }: BasicGridProps<Item>) => {
  return (
    <div className="bg-base-300 pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-xl md:text-2xl font-medium text-primary">
          {title}
        </h2>
        <p className="text-3xl leading-tight tracking-wider uppercase text-white font-extrabold mt-2">
          {subtitle}
        </p>
        <div className="divider"></div>
        <div className="grid gap-16 pt-6 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {items.length > 0 ? items.map(render) : (
            <p className="text-lg font-semibold text-heading">
              No items were found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
