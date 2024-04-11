import React from 'react';
import cl from 'classnames';

const CornerButtonContainer = ({ children }) => {
  return (
    <div className='absolute -bottom-2.5 -right-2.5'>
      <div
        className={cl(
          'relative rounded-tl-[34px] bg-light px-2.5 py-2.5',
          'after:absolute after:bottom-2.5 after:right-full after:h-full after:w-full after:rounded-br-[24px] after:bg-transparent after:shadow-[8px_44px_0_0_#F5F7F9] after:content-[""]',
          'before:absolute before:bottom-full before:right-2.5 before:h-full before:w-full before:rounded-br-[24px] before:bg-transparent before:shadow-[44px_8px_0_0_#F5F7F9] before:content-[""]'
        )}>
        {children}
      </div>
    </div>
  );
};

export { CornerButtonContainer };
