import React from 'react';
import cl from 'classnames';

const ArrowRight = ({ className }) => {
  return (
    <svg width='14' height='10' className={cl(className, 'stroke-current')}>
      <path
        d='M9 1L13 5M13 5L9 9M13 5L1 5'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export { ArrowRight };
