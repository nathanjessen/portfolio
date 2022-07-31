export interface CategoryItemProps {
  name: string;
}

export const CategoryItem = ({ name }: CategoryItemProps) => {
  return (
    <div className="flex items-center text-sm leading-5 text-gray-500">
      <svg className="flex-shrink-0 mr-1 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
        fill="currentColor">
        <path
          d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
      </svg>
      {name}
    </div>
  );
};

