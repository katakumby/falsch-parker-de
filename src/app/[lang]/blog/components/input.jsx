import React from 'react';
import { ArrowDotButton } from '@/components/buttons/arrowDotButton';

const Input = ({ placeholder }) => {
  return (
    <form className='box-content flex h-[52px] max-w-[352px] overflow-hidden rounded-full border border-dark'>
      <input
        className='h-full w-full bg-light px-6 text-base focus:outline-0'
        placeholder={placeholder}
      />
      <ArrowDotButton theme='subscribe'>Subscribe</ArrowDotButton>
    </form>
  );
};

export { Input };
