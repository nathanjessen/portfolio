import DateItem from '../DateItem';
import { Page } from '../PostList/PostContent';
import { TagItem } from '../Tags/TagItem';

export interface PageListItemProps {
  item: Page;
}

export const PageListItem = ({ item }: PageListItemProps) => {
  return (
    <li className="border-t border-gray-200">
      <a href={item.url}
        className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
        <div className="px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="text-sm leading-5 font-medium text-primary truncate">
              {item.title}
            </div>
            <div className="ml-2 flex-shrink-0 flex">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-primary-content text-primary">
                {item.category}
              </span>
            </div>
          </div>
          <div className="mt-2 sm:flex sm:justify-between">
            <DateItem date={item.date} />

            <div className="sm:flex mt-2 sm:mt-0 space-x-2">
              {item.tags?.map((tag, idx) => (
                <TagItem tag={tag} key={idx} />
              ))}
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};
