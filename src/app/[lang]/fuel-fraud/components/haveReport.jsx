'use client';

import React from 'react';
import { OpenAppButton } from '@/components/buttons/openAppButton';
import Image from 'next/image';
import RefillImage from '@/images/global/refill.png';
import RefillImageMobile from '@/images/global/refill-mobile.png';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { Cross } from '@/components/icons/cross';

export const HaveReport = () => {
  const openApp = () => {
    window.open('https://app.falsch-parker.ch/', '_blank');
  };

  return (
    <div className='relative h-[700px] w-full overflow-hidden rounded-bl-card rounded-tl-card  rounded-tr-card max-md:h-[580px]'>
      <div className='absolute left-0 z-[1] flex h-full flex-col p-20 max-md:p-10 max-sm:justify-between'>
        <h3 className='mb-16 w-2/3 text-[90px] leading-[1.2] text-red-600 max-lg:text-[45px] max-md:w-full max-sm:mb-8 max-sm:text-[30px]'>
          <span className='text-white/50'>Müssen Sie </span>
          <br />
          <span className='text-white'>ein Tankfluchtvorfall melden?</span>
        </h3>
        <OpenAppButton onClick={openApp} />
      </div>
      <Image
        src={RefillImage}
        fill
        alt='No Parking'
        className='object-cover object-right max-sm:hidden'
      />
      <Image
        src={RefillImageMobile}
        fill
        alt='No Parking'
        className='object-cover object-right sm:hidden'
      />
      <CornerButtonContainer>
        <RoundButton
          icon={Cross}
          animation='group-hover:scale-125 group-hover:-rotate-90'
          className='bg-[#0D0F11] text-white'
        />
      </CornerButtonContainer>
    </div>
  );
};
