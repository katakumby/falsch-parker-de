import React from 'react';
import { PostCover } from '@/components/post/postCover';

const PostList = ({ posts, lang }) => {
  return (
    <div className='mt-10 grid grid-cols-2 gap-5 max-lg:grid-cols-1'>
      {posts.map((post) => (
        <PostCover
          key={post.slug}
          {...post}
          href={`/${lang}/blog/${post.slug}`}
        />
      ))}
    </div>
  );
};

export { PostList };
