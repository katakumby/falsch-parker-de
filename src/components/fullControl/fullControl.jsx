import React from 'react';
import { ArrowDotButton } from '@/components/buttons/arrowDotButton';
import Image from 'next/image';

const FullControl = ({ cover, subtitle, smallCover }) => {
  return (
    <div className='h-card relative flex flex-col overflow-hidden rounded-card bg-dark p-20 max-md:justify-end max-md:p-10 max-sm:p-6'>
      <div className='pointer-events-none absolute bottom-0 left-0 right-0 top-0 m-10 -mb-16 max-xl:-mb-10 max-lg:mb-0 max-md:hidden'>
        <Image
          src={cover}
          alt='cover'
          fill
          className='object-contain object-bottom'
        />
      </div>
      <div className='absolute bottom-[-100px] left-[-100px] right-[-100px] top-0'>
        <Image
          src={smallCover}
          alt='cover'
          fill
          className='!top-[-350px] object-contain object-center md:hidden'
        />
      </div>
      <div className='z-10 grid max-w-[480px] gap-9 text-white max-md:gap-6'>
        <h1 className='text-7xl max-md:text-5xl'>Full control.</h1>
        <p className='text-xl max-md:text-base'>{subtitle}</p>
        <div className='flex max-md:justify-center'>
          <ArrowDotButton theme='light'>Open app</ArrowDotButton>
        </div>
      </div>
    </div>
  );
};

export { FullControl };
