import React from 'react';
import { PostCover } from '@/components/post/postCover';
import { Breadcrumbs } from '@/app/[lang]/blog/[slug]/breadcrumbs';

const Heading = ({ post, lang }) => {
  return (
    <div className='flex flex-col gap-5'>
      <Breadcrumbs lang={lang} title={post.title} />
      <PostCover {...post} scroll />
    </div>
  );
};

export { Heading };
