import { PostItem } from "../PostList/PostItem";
import { Post } from "../PostList/PostList";

export interface RecentPostItemsProps {
  title: string;
  subtitle: string;
  posts: Post[];
}

export const RecentPostItems = ({ title, subtitle, posts }: RecentPostItemsProps) => {
  return (
    <div className="bg-base-300 pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="pb-6">
          <h2 className="text-3xl tracking-tight font-extrabold text-primary sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-xl sm:mt-4">
            {subtitle}
          </p>
        </div>
        <div className="divider"></div>
        <div className="grid gap-16 pt-6 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post, idx) => (
            <PostItem post={post} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};
