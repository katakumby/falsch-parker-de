import React from 'react';
import { ArrowDown } from '@/components/icons/arrowDown';

export const ArrowDownRoundButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='group flex h-[52px] w-[52px] items-center justify-center rounded-full border border-dark bg-transparent transition-colors duration-300 hover:bg-dark'>
      <ArrowDown className='transition-all duration-300 group-hover:translate-y-1 group-hover:scale-125 group-hover:text-light' />
    </button>
  );
};
