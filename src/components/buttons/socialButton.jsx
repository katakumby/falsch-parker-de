import React from 'react';
import Link from 'next/link';

const SocialButton = ({ icon, href }) => {
  const Icon = icon;
  return (
    <Link
      href={href}
      target='_blank'
      className='group flex h-[60px] w-[60px] items-center justify-center rounded-full border border-white transition-colors duration-300 hover:bg-light'>
      <Icon className='text-white transition-colors duration-300 group-hover:text-black' />
    </Link>
  );
};

export { SocialButton };
