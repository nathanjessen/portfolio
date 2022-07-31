import { PostItemCard } from "../PostList/PostItemCard";
import { Post } from "../PostList/PostList";

export interface RecentPostCardsProps {
  title: string;
  subtitle: string;
  posts: Post[];
}

export const RecentPostCards = ({ title, subtitle, posts }: RecentPostCardsProps) => {
  return (
    <div className="bg-base-100 relative pt-16 pb-20 lg:pt-24 lg:pb-28 ">
      <div className="absolute inset-0">
        <div className="bg-base-300 h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-primary sm:text-4xl sm:leading-10">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 sm:mt-4">
            {subtitle}
          </p>
        </div>
        <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          {posts.map((post, idx) => (
            <PostItemCard post={post} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};
