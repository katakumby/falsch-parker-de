import React from 'react';
import cl from 'classnames';

export const ArrowDown = ({ className }) => {
  return (
    <svg width='24' height='24' className={cl(className, 'stroke-current')}>
      <path
        d='M8 14L12 18M12 18L16 14M12 18L12 6'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
