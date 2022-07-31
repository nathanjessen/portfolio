import { PropsWithChildren } from 'react';
import DefaultLayout, { MetaProps } from './DefaultLayout';
import BackgroundTexture from '../BackgroundTexture';
// import { PostContent } from '../../PostList/PostContent';

const PostLayout = ({ children, ...customMeta }: PropsWithChildren<MetaProps>) => {
  return (
    <DefaultLayout {...customMeta}>
      <div className="relative py-16 overflow-hidden">
        <BackgroundTexture />
        {/* <PostContent /> */}
        {children}
      </div>
    </DefaultLayout>
  );
};

export default PostLayout;
