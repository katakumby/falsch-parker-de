import React from 'react';
import { PostList, TagList } from './components';

const Posts = ({ activeTag, posts, tags, lang }) => {
  return (
    <section>
      <TagList tags={tags} activeTag={activeTag} />
      <PostList posts={posts} lang={lang} />
    </section>
  );
};

export { Posts };
