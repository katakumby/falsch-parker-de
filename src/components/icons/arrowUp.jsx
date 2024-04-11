import React from 'react';
import cl from 'classnames';

const ArrowUp = ({ className }) => {
  return (
    <svg width='10' height='14' className={cl('stroke-current', className)}>
      <path
        d='M1 5L5 1M5 1L9 5M5 1L5 13'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export { ArrowUp };
