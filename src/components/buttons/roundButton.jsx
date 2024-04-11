import React from 'react';
import Link from 'next/link';
import cl from 'classnames';

const RoundButton = ({
  icon,
  href,
  animation,
  onClick,
  theme = '',
  className = '',
}) => {
  const Icon = icon;
  const Container = href ? Link : 'button';

  const colors = {
    dark: 'bg-dark text-white',
    light: 'bg-white text-dark',
  };

  return (
    <Container
      onClick={onClick}
      href={href}
      className={cl(
        'group flex h-12 w-12 items-center justify-center rounded-full outline-none',
        theme ? colors[theme] : '',
        className
      )}>
      <Icon className={cl('transition-transform duration-300', animation)} />
    </Container>
  );
};

export { RoundButton };
