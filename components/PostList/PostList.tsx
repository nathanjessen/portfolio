import { PostItemBox } from './PostItemBox';

export interface Post {
  url?: string;
  img_alt?: string;
  external_url?: string;
  img?: string;
  date?: any;
  title?: string;
  excerpt?: string;
  categories?: any[];
  category: string;
  author?: string;
}

export interface PostListProps {
  posts: Post[];
}

export const PostList = ({ posts }: PostListProps) => {
  return (
    <div className="relative max-w-lg mx-auto lg:max-w-7xl">
      <div className="grid gap-6 lg:grid-cols-2">
        {posts.map((post, idx) => (
          <PostItemBox post={post} key={idx} />
        ))}
      </div>
    </div>
  );
};
