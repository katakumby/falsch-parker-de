'use client';

import React from 'react';
import Link from 'next/link';
import { Dot } from '@/components/icons/dot';
import cl from 'classnames';
import { ArrowRight } from '@/components/icons/arrowRight';

const ArrowDotButton = ({ href, onClick, children, theme = 'dark' }) => {
  const Container = href ? Link : 'button';

  const colors = {
    dark: 'border-dark text-dark bg-transparent hover:bg-dark hover:text-white',
    light:
      'border-white text-white bg-transparent hover:bg-white hover:text-dark',
    green: 'border-0 text-white bg-green hover:bg-dark hover:text-white',
    subscribe:
      'border-0 bg-dark text-white hover:bg-transparent hover:text-dark',
  };

  return (
    <Container
      href={href}
      onClick={onClick}
      className={cl(
        'group relative flex h-[52px] w-fit shrink-0 items-center gap-4 overflow-hidden rounded-full border px-5 outline-none transition-colors duration-300',
        colors[theme]
      )}>
      <ArrowRight className='absolute left-0 -translate-x-full transition-transform duration-300 group-hover:translate-x-4' />
      <span className='transition-transform duration-300 group-hover:translate-x-5'>
        {children}
      </span>
      <Dot className='transition-transform duration-300 group-hover:scale-0' />
    </Container>
  );
};

export { ArrowDotButton };
