import React from 'react';
import { Chip } from '@/components/chips/chip';

const Breadcrumbs = ({ lang, title }) => {
  return (
    <div className='no-scrollbar -mx-4 overflow-x-auto '>
      <div className='flex items-center before:min-h-4 before:min-w-4 before:content-[""] after:min-h-4 after:min-w-4 after:content-[""]'>
        <Chip small href={`/${lang}/blog`} dark>
          Blog
        </Chip>
        <span className='mx-3 opacity-50'>/</span>
        <Chip small dark active>
          {title}
        </Chip>
      </div>
    </div>
  );
};

export { Breadcrumbs };
