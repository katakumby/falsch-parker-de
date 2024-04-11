import React from 'react';
import { buildBlogPagingHref } from '@/utils/utils';
import { Chip } from '@/components/chips/chip';

const TagList = ({ tags, activeTag }) => {
  return (
    <div className='no-scrollbar -mx-4 overflow-x-auto'>
      <div className='flex gap-2 before:min-h-2 before:min-w-2 before:content-[""] after:min-h-2 after:min-w-2 after:content-[""]'>
        <Chip
          dark
          key='all'
          active={!activeTag}
          href={activeTag ? buildBlogPagingHref(1) : ''}>
          All
        </Chip>
        {tags.map((tag) => (
          <Chip
            dark
            key={tag}
            active={tag === activeTag}
            href={tag !== activeTag ? buildBlogPagingHref(1, tag) : ''}>
            {tag}
          </Chip>
        ))}
      </div>
    </div>
  );
};

export { TagList };
