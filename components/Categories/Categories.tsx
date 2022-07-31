import PageList from "../PageList";

export interface PageItem {
  url: string;
  title: string;
  date: string;
}

export type Category = [string, PageItem[]];

export interface CategoriesProps {
  categories: Category[];
}

export const Categories = ({ categories }: CategoriesProps) => {
  return (
    <>
      {categories.map((category, idx) => (
        <div className="bg-base-300 overflow-hidden sm:rounded-lg sm:shadow mb-8" key={idx}>
          <div className="bg-base-300 p-4 border-b border-base-100 sm:px-6">
            <div className="flex items-center justify-between flex-wrap sm:flex-no-wrap">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {category[0]}
              </h3>
              <div className="flex-shrink-0">
                <span
                  className="inline-flex items-center px-2 py-1 rounded-md text-sm font-medium leading-5 bg-primary text-primary-content">
                  {category[1].length}
                </span>
              </div>
            </div>
          </div>

          {/* sort: "date" | reverse */}
          <PageList pages={category[1]} />
        </div>
      ))}
    </>
  );
};
