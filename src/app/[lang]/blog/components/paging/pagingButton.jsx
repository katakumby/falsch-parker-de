import React from 'react';
import cl from 'classnames';
import Link from 'next/link';

const PagingButton = ({ icon, direction, disabled, href }) => {
  const Icon = icon;

  return (
    <Link
      href={href}
      className={cl(
        disabled ? 'pointer-events-none opacity-50' : '',
        'group flex h-[52px] w-[52px] items-center justify-center rounded-full border border-dark text-dark transition-colors duration-300 hover:bg-dark hover:text-light'
      )}>
      <Icon
        className={cl(
          'transition-transform duration-300 group-hover:scale-125',
          direction === 'left'
            ? 'group-hover:-translate-x-1'
            : 'group-hover:translate-x-1'
        )}
      />
    </Link>
  );
};

export { PagingButton };
