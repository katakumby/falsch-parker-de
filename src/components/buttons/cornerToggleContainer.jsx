import React from 'react';
import cl from 'classnames';

const CornerToggleContainer = ({ children }) => {
  return (
    <div
      className={cl(
        'relative rounded-bl-[42px] bg-light p-2.5',
        'after:absolute after:right-full after:top-2.5 after:h-[74px] after:w-[74px] after:rounded-tr-card after:bg-transparent after:shadow-[5px_-47px_0_5px_#F5F7F9] after:content-[""]',
        'before:absolute before:right-2.5 before:top-full before:h-[74px] before:w-[74px] before:rounded-tr-card before:bg-transparent before:shadow-[7px_-5px_0_5px_#F5F7F9] before:content-[""]'
      )}>
      {children}
    </div>
  );
};

export { CornerToggleContainer };
