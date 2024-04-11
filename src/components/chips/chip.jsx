import React from 'react';
import Link from 'next/link';
import cl from 'classnames';

const Chip = ({ children, small, active, href, dark }) => {
  const Container = href ? Link : 'div';
  return (
    <Container
      href={href}
      className={cl(
        'shrink-0 rounded-full border text-base font-light transition-opacity duration-300',
        dark ? 'border-dark/50 text-dark/50' : 'border-white/50 text-white/50',
        small ? 'px-3.5 py-1.5 text-sm' : 'px-5 py-3',
        active ? 'border-dark bg-dark text-white' : '',
        href ? 'hover:opacity-50' : ''
      )}>
      {children}
    </Container>
  );
};

export { Chip };
