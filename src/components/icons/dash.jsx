import React from 'react';
import cl from 'classnames';

export const Dash = ({ className }) => {
  return (
    <svg width='20' height='2' className={cl('stroke-current', className)}>
      <path
        d='M19 1H0.999878'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
