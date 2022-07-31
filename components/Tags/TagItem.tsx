export interface TagItemProps {
  tag: string;
}

export const TagItem = ({ tag }: TagItemProps) => {
  return (
    <div className="flex items-center text-sm leading-5 text-gray-500">
      <svg className="flex-shrink-0 mr-1 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
        fill="currentColor">
        <path fillRule="evenodd"
          d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd" />
      </svg>
      {tag}
    </div>
  );
};
