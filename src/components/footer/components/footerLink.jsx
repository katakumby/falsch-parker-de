import React from 'react';
import Link from 'next/link';
import cl from 'classnames';

const FooterLink = ({ href, children }) => {
  const Container = href !== undefined ? Link : 'span';
  return (
    <Container
      href={href}
      className={cl(
        'whitespace-pre text-xl font-light opacity-50 transition-opacity duration-300',
        href ? 'hover:opacity-30' : ''
      )}>
      {children}
    </Container>
  );
};

export { FooterLink };
