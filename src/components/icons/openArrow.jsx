import React from 'react';
import cl from 'classnames';

const OpenArrow = ({ className }) => {
  return (
    <svg
      width='17'
      height='9'
      fill='none'
      className={cl('stroke-current', className)}>
      <path
        d='M1.2085 1.5835L8.50016 7.41683L15.7918 1.5835'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export { OpenArrow };
