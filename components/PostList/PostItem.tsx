import Image from "next/image";
import { Post } from "./PostList";

export interface PostItemProps {
  post: Post;
}

export const PostItem = ({ post }: PostItemProps) => {
  return (
    <div itemScope itemType="http://schema.org/BlogPosting">
      <div>
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-info text-info-content">
          {post.categories?.[0]}
        </span>
      </div>
      <a href={post.external_url || post.url}
        target={post.external_url ? "_blank" : "_self"}
        rel="noreferrer"
        className="block mt-4"
        itemProp="url">
        <p className="text-xl font-semibold text-secondary" itemProp="name headline">
          {post.title}
        </p>
        <p className="mt-3 text-base">
          {/* {post.excerpt | strip_html | strip_newlines | truncate: 200 } */}
          {post.excerpt}
        </p>
      </a>
      <div className="mt-6 flex items-center">
        {/* <div className="flex-shrink-0">
          <a href="#none">
            <span className="sr-only">Nathan Jessen</span>
            <Image
              className="h-10 w-10 rounded-full"
              src="/assets/images/avatar-person.png"
              width={40}
              height={40}
              alt="" />
          </a>
        </div> */}
        <div>
          {/* <p className="text-sm font-medium text-primary">
            <a href="#">{post.author}</a>
          </p> */}
          <div className="flex space-x-1 text-sm">
            <time dateTime="{post.date | date_to_xmlschema }" itemProp="datePublished">
              {/* {post.date | date: "%B %d, %Y" } */}
              {post.date}
            </time>
            {/* <span aria-hidden="true"> &middot; </span> */}
            {/* <span> 6 min read </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

