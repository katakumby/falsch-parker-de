import React from 'react';
import cl from 'classnames';

export const Cross = ({ className }) => {
  return (
    <svg width='14' height='14' className={cl(className, 'stroke-current')}>
      <path
        d='M7 1V13M13 7L1 7'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
