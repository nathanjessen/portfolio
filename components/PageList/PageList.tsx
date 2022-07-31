import { PageListItem } from './PageListItem';
import { Page } from '../PostList/PostContent';

export interface PageListProps {
  pages: Page[];
}

export const PageList = ({ pages }: PageListProps) => {
  return (
    <ul>
      {pages.map((page, idx) => (
        <PageListItem item={page} key={idx} />
      ))}
    </ul>
  );
};
