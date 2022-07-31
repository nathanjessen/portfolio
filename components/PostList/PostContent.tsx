import { ReactNode } from "react";

export interface Page {
  date: string;
  title: string;
  url: string;
  excerpt?: string;
  category?: string;
  categories?: string[];
  tags?: string[];
  previous?: Page;
  next?: Page;
}

export interface PostContentProps {
  page: Page;
  content: ReactNode;
}

export const PostContent = ({ page, content }: PostContentProps) => {
  return (
    <article itemScope itemType="http://schema.org/BlogPosting" className="relative px-4 sm:px-6 lg:px-8">
      <div className="text-lg max-w-prose mx-auto mb-6">
        <p className="text-sm text-center leading-6 text-primary font-semibold tracking-wide uppercase">
          <time dateTime="{page.date | date_to_xmlschema }" itemProp="datePublished">
            {/* {page.date | date: "%b %-d, %Y"} */}
            {page.date}
          </time>
        </p>
        <h1
          className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          itemProp="name headline">
          {page.title}
        </h1>
      </div>

      <div className="prose prose-lg max-w-prose text-gray-500 mx-auto" itemProp="articleBody">
        {content}

        <div className="mt-8 flex justify-between">
          {page.previous && (
            <a href={page.previous.url} rel="prev">
              &larr; <span className="">Older</span>
            </a>
          )}
          {page.next && (
            <a className="flex-grow text-right" href={page.next.url} rel="next">
              <span className="">Newer</span> &rarr;
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

