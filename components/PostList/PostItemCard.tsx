import Image from "next/image";
import { Post } from "./PostList";

export interface PostItemCardProps {
  post: Post;
}

export const PostItemCard = ({ post }: PostItemCardProps) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden" itemScope itemType="http://schema.org/BlogPosting">
      {post.img && (
        <div className="flex-shrink-0 h-48 bg-base-300">
          <Image
            className="h-48 w-full object-cover"
            src={post.img}
            alt={post.img_alt}
            width={192}
            height={192}
          />
        </div>
      )}
      <div className="flex-1 bg-base-200 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm leading-5 font-medium text-secondary">
            {post.category}
          </p>
          <a href={post.external_url || post.url} className="block" itemProp="url">
            <h3 className="mt-2 text-xl leading-7 font-semibold text-accent" itemProp="name headline">
              {post.title}
            </h3>
            <p className="mt-3 text-base leading-6">
              {/* {post.excerpt | strip_html | strip_newlines | truncate: 200 } */}
              {post.excerpt}
            </p>
          </a>
        </div>
        <div className="mt-6 flex items-center justify-end">
          <div className="flex-shrink-0 text-sm leading-5">
            <time dateTime="{post.date | date_to_xmlschema }" itemProp="datePublished">
              {/* {post.date | date: "%b %-d, %Y" } */}
              {post.date}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
};
