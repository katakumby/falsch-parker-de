import React from 'react';
import Link from 'next/link';

const AppButton = ({ href, icon, children }) => {
  const Icon = icon;
  return (
    <Link
      href={href}
      className='group flex h-[52px] w-full items-center justify-center gap-3 rounded-full border border-white bg-dark transition-colors duration-300 hover:bg-light hover:text-black'>
      <Icon />
      <span>{children}</span>
    </Link>
  );
};

export { AppButton };
