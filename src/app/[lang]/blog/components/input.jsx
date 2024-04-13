import React from 'react';
import { ArrowDotButton } from '@/components/buttons/arrowDotButton';

const Input = ({ placeholder, action }) => {
  return (
    <form className='box-content flex h-[52px] w-full max-w-[470px] overflow-hidden rounded-full border border-dark'>
      <input
        className='h-full w-full flex-1 bg-light px-6 text-base placeholder-shown:truncate focus:outline-0'
        placeholder={placeholder}
      />
      <ArrowDotButton theme='subscribe'>{action}</ArrowDotButton>
    </form>
  );
};

export { Input };
