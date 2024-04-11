import React from 'react';
import cl from 'classnames';

const Facebook = ({ className }) => {
  return (
    <svg width='12' height='20' className={cl('fill-current', className)}>
      <path d='M7.54918 20V10.8777H10.6099L11.0691 7.32156H7.54918V5.05147C7.54918 4.0222 7.83383 3.32076 9.31147 3.32076L11.193 3.31999V0.13923C10.8676 0.0969453 9.75069 0 8.4507 0C5.7361 0 3.87764 1.65697 3.87764 4.69927V7.32156H0.807617V10.8777H3.87764V20H7.54918Z' />
    </svg>
  );
};

export { Facebook };
