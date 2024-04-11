import React from 'react';

export const Container = ({ children }) => {
  return (
    <div className='flex w-full items-center justify-center px-10 max-md:px-10 max-sm:px-4'>
      <div className='w-full max-w-[1360px]'>{children}</div>
    </div>
  );
};
