export interface DateItemProps {
  date: string;
}

export const DateItem = ({ date }: DateItemProps) => {
  return (
    <div className="flex items-center text-sm leading-5 text-gray-500">
      <svg className="flex-shrink-0 mr-1 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
        fill="currentColor">
        <path fillRule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          clipRule="evenodd" />
      </svg>
      {/* | date_to_xmlschema */}
      <time dateTime={date}>
        {/* {date | date: "%B %d, %Y" } */}
        {date}
      </time>
    </div>
  );
};
