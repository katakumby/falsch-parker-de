'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import cl from 'classnames';
import { OpenArrowSmall } from '@/components/icons/openArrowSmall';

const Heading = ({ title, subtitle, icons }) => {
  const [subtitleFull, setSubtitleFull] = useState(false);

  return (
    <div className='grid gap-10 max-md:gap-6'>
      <span className='text-8xl max-md:text-3xl'>{title}</span>
      <div className='h-[1px] border-b border-dark'></div>
      <div className='flex'>
        <div className='flex flex-1'>
          {icons.map((icon, index) => (
            <Image
              key={index}
              src={icon}
              alt='icon'
              style={{ zIndex: 0 - index }}
              className={cl(
                'h-[60px] w-[60px] max-md:h-[36px] max-md:w-[36px]',
                index !== 0 ? '-ml-5 max-md:-ml-3' : ''
              )}
            />
          ))}
        </div>
        <div className='flex-1'>
          <div
            className={cl(
              'text-2xl max-md:text-sm',
              subtitleFull ? '' : 'max-md:line-clamp-4'
            )}>
            {subtitle}
          </div>
          <button
            className='mt-5 flex w-full items-center justify-between text-sm md:hidden'
            onClick={() => setSubtitleFull((prev) => !prev)}>
            <span>Show more</span>
            <OpenArrowSmall
              className={cl(
                'text-dark transition-transform duration-300',
                subtitleFull ? 'rotate-180' : ''
              )}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export { Heading };
