import React from 'react';
import cl from 'classnames';

const Dot = ({ className }) => {
  return (
    <svg width='4' height='4' className={cl(className, 'fill-current')}>
      <circle cx='2' cy='2' r='2' />
    </svg>
  );
};

export { Dot };
