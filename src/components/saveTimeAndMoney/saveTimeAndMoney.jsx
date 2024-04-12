'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import LineSaveTime from '@/images/home-page/lineSaveTime.png';
import MobLineSaveMoney from '@/images/home-page/mobileLineSaveMoney.png';
import LineSaveMoney from '@/images/home-page/lineSaveMoney.png';
import MobLineSaveTime from '@/images/home-page/mobileLineSaveTime.png';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { ArrowRight } from '@/components/icons/arrowRight';

export const SaveTimeAndMoney = () => {
  const router = useRouter();
  const goToContactUs = () => {
    router.push('/contact');
  };
  return (
    <div className='relative mt-5 flex gap-5 text-dark max-lg:text-[34px] max-md:text-[24px] max-sm:flex-col max-sm:items-center lg:text-[53px] xl:text-[64px]'>
      <div className='relative h-full w-1/2 overflow-hidden rounded-card max-sm:h-[343px] max-sm:w-[343px]'>
        <div className='absolute w-full p-[20px] text-center  max-sm:p-[20px] xl:p-[60px]'>
          <span>Kosten</span>
          <br />
          <span className='text-dark/50'>Nutzen.</span>
        </div>
        <Image
          src={LineSaveTime}
          alt='Save time'
          className='object-cover max-sm:hidden sm:block'
        />
        <Image
          src={MobLineSaveMoney}
          alt='Save time'
          className='hidden object-cover max-sm:block'
        />
      </div>
      <div className='relative h-full w-1/2 overflow-hidden rounded-bl-card rounded-tl-card rounded-tr-card max-sm:h-[343px] max-sm:w-[343px]'>
        <div className='absolute bottom-[35px] w-full p-[20px] text-center max-lg:p-[20px]  max-sm:p-[15px] xl:p-[60px]'>
          <span>Sparen Sie </span>
          <span className='text-dark/50'>Zeit und Geld.</span>
        </div>
        <div className='absolute bottom-[15px] right-[80px] text-base'>
          Kontaktieren Sie uns
        </div>
        <Image
          src={LineSaveMoney}
          alt='Save money'
          className='object-cover max-sm:hidden sm:block'
        />
        <Image
          src={MobLineSaveTime}
          alt='Save time'
          className='hidden object-cover max-sm:block'
        />
        <CornerButtonContainer>
          <RoundButton
            onClick={goToContactUs}
            icon={ArrowRight}
            theme='light'
            animation='group-hover:scale-125 group-hover:-rotate-45'
          />
        </CornerButtonContainer>
      </div>
    </div>
  );
};
