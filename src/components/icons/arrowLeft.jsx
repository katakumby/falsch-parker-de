import React from 'react';
import cl from 'classnames';

export const ArrowLeft = ({ className }) => {
  return (
    <svg width='14' height='10' className={cl(className, 'stroke-current')}>
      <path
        d='M5 1L1 5M1 5L5 9M1 5L13 5'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
