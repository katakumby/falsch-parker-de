import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/container/container';
import { MainOpenAppShape } from '@/app/[lang]/home/components/sections/components/mainOpenAppShape';
import MainBanner from '@/images/home-page/main-banner.png';
import SmallCards from './components/smallCards';

export const MainSection = () => {
  return (
    <Container>
      <div className='flex gap-5 max-lg:flex-col'>
        <div className='relative h-[795px] w-full bg-light max-lg:h-[540px] lg:flex-1'>
          <MainOpenAppShape />
          <Image
            src={MainBanner}
            fill
            alt='Falsch-parker logo'
            className='rounded-card object-cover'
          />
        </div>
        <SmallCards />
      </div>
    </Container>
  );
};
