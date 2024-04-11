import React from 'react';
import cl from 'classnames';

const OpenArrowSmall = ({ className }) => {
  return (
    <svg
      width='12'
      height='6'
      fill='none'
      className={cl('stroke-current', className)}>
      <path
        d='m1 1 5 4 5-4'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export { OpenArrowSmall };
