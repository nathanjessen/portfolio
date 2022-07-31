import { Post } from "./PostList";

export interface PostItemBoxProps {
  post: Post;
}

export const PostItemBox = ({ post }: PostItemBoxProps) => {
  return (
    <div className="bg-base-300 py-6 px-4 sm:px-6 lg:px-8 border border-base-100 flex flex-col" itemScope
      itemType="http://schema.org/BlogPosting">
      <p className="text-sm">
        <time dateTime="{post.date | date_to_xmlschema }" itemProp="datePublished">
          {/* {post.date | date: "%B %d, %Y" } */}
          {post.date}
        </time>
      </p>
      <h3 className="mt-2 text-xl font-semibold text-primary" itemProp="name headline">
        {post.title}
      </h3>
      <p className="mt-3 text-base">
        {/* {post.excerpt | strip_html | strip_newlines | truncate: 200 } */}
        {post.excerpt}
      </p>
      <div className="mt-4 flex-1 flex items-end">
        <a href={post.external_url || post.url}
          target={post.external_url ? "_blank" : "_self"}
          rel="noreferrer"
          className="link link-secondary link-hover inline-flex"
          itemProp="url">
          Read full story
          {post.external_url && (
            <svg className="h-6 w-6 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          )}
        </a>
      </div>
    </div >
  );
};

