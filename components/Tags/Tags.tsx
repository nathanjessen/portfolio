import DateItem from '../DateItem';
// import { CategoryItem } from '../../Categories/CategoryItem';

export interface PageItem {
  url: string;
  title: string;
  date: string;
}
export type Tag = [string, PageItem[]];

export interface TagsProps {
  tags: Tag[];
}

export const Tags = ({ tags }: TagsProps) => {
  return (
    <>
      {tags.map((tag, idx) => (
        <div className="bg-white overflow-hidden sm:rounded-lg sm:shadow mb-8" key={idx}>
          <div className="bg-white p-4 border-b border-gray-200 sm:px-6">
            <div className="flex items-center justify-between flex-wrap sm:flex-no-wrap">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {tag[0]}
              </h3>
              <div className="flex-shrink-0">
                <span
                  className="inline-flex items-center px-2 py-1 rounded-md text-sm font-medium leading-5 bg-primary-content text-primary">
                  {tag[1].length}
                </span>
              </div>
            </div>
          </div>

          <ul>
            {/* assign pages_list = tag[1] | sort: "date" | reverse */}
            {tag[1].map((node, idx) => (
              <li className="border-t border-gray-200" key={idx}>
                <a href={node.url}
                  className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="text-sm leading-5 font-medium text-primary truncate">
                        {node.title}
                      </div>
                      <div className="ml-2 flex-shrink-0 flex">
                        <span
                          className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-primary-content text-primary">
                          {tag[0]}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <DateItem date={node.date} />
                      <div className="mt-2 sm:mt-0 sm:flex space-x-2">
                        {/* {node.categories.sort().map((category, idx) => {
                          <CategoryItem name={category} key={idx} />;
                        })} */}
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

