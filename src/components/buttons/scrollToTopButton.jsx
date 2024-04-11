import React from 'react';
import { ArrowUp } from '@/components/icons/arrowUp';

const ScrollToTopButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='group flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white bg-dark transition-colors duration-300 hover:bg-light'>
      <ArrowUp className='transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-black' />
    </button>
  );
};

export { ScrollToTopButton };
