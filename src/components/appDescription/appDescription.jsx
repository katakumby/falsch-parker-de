'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CornerToggleContainer } from '@/components/buttons/cornerToggleContainer';
import MobileParkingCar from '@/images/home-page/mobil-parking-car.png';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { Cross } from '@/components/icons/cross';
import { ArrowLeft } from '@/components/icons/arrowLeft';
import { ArrowRight } from '@/components/icons/arrowRight';
import { useRouter } from 'next/navigation';

const RenderImageBlock = () => {
  return (
    <div className='relative h-full w-1/2 max-md:w-full max-md:pl-0'>
      <Image
        src={MobileParkingCar}
        fill
        alt='No Parking'
        className='ml-[16%] mt-[10%] object-contain max-md:ml-[15%] max-md:mt-[5%] max-sm:ml-[20%]'
      />
    </div>
  );
};

const RenderTextBlock = (isOnlyApp) => {
  return (
    <div className='flex h-[760px] w-1/2 items-center justify-center max-md:h-[580px] max-md:w-full'>
      <div className='w-full px-5 md:max-w-[530px]'>
        <div className='flex justify-between py-5 text-2xl max-md:text-xl'>
          <span className='text-dark'>Take a picture of wrong parker.</span>
          <span className='ml-5 text-dark/50'>01</span>
        </div>
        <div className='flex items-center justify-between border-y-[1px] border-dark/10 py-5 text-2xl max-md:text-xl'>
          <span className='text-dark'>
            {isOnlyApp
              ? 'Check that illegal parking situation is well documented.'
              : 'Scan the QR code.'}
          </span>
          <span className='ml-5 text-dark/50'>02</span>
        </div>
        <div className='flex  justify-between py-5 text-2xl max-md:text-xl'>
          <span className='text-dark'>Confirm the location.</span>
          <span className='ml-5 text-dark/50'>03</span>
        </div>
      </div>
    </div>
  );
};

export const AppDescription = () => {
  const router = useRouter();
  const [isOnlyApp, setIsOnlyApp] = useState(true);
  const [isFirstScreen, setIsFirstScreen] = useState(true);

  const openApp = () => {
    isOnlyApp && setIsOnlyApp(false);
  };

  const openQrCode = () => {
    !isOnlyApp && setIsOnlyApp(true);
  };

  const goToTowing = () => {
    router.push('/towing');
  };

  return (
    <div className='relative mb-10 h-full w-full overflow-hidden max-md:mb-5'>
      <div className='overflow-hidden'>
        <div className='relative mt-5 flex h-[760px] rounded-card bg-white max-md:h-[580px] max-md:flex-col'>
          <div className='absolute -right-2.5 -top-2.5 z-[2] hidden md:block'>
            <CornerToggleContainer>
              <div className=' flex h-[64px] w-[350px] items-center justify-center gap-2 rounded-card bg-white'>
                <div className='w-full px-10'>
                  <div className='flex w-full items-center justify-between border-b text-[16px]'>
                    <div
                      onClick={openQrCode}
                      className={`-mb-[1px] w-1/2 cursor-pointer border-b-[1px] pb-[7px] text-center ${isOnlyApp ? 'border-dark' : 'border-transparent'} ${isOnlyApp ? 'text-dark' : 'text-dark/50'}`}>
                      Only App
                    </div>
                    <div
                      onClick={openApp}
                      className={`-mb-[1px] w-1/2 cursor-pointer border-b-[1px] pb-[7px] text-center ${!isOnlyApp ? 'border-dark' : 'border-transparent'} ${!isOnlyApp ? 'text-dark' : 'text-dark/50'}`}>
                      App & QR code
                    </div>
                  </div>
                </div>
              </div>
            </CornerToggleContainer>
          </div>

          <div className='relative hidden w-full md:flex'>
            {RenderImageBlock()}
            {RenderTextBlock(isOnlyApp)}
          </div>

          <div className='relative h-full w-full max-md:flex md:hidden'>
            {isFirstScreen ? RenderImageBlock() : RenderTextBlock(isOnlyApp)}
          </div>

          <div className='md:hidden'>
            <CornerButtonContainer>
              <RoundButton
                theme='light'
                icon={isFirstScreen ? Cross : ArrowLeft}
                onClick={() => setIsFirstScreen((prev) => !prev)}
                animation={`group-hover:scale-125 ${isFirstScreen && 'group-hover:-rotate-90'}`}
              />
            </CornerButtonContainer>
          </div>
          <div className='max-md:hidden'>
            <CornerButtonContainer>
              <RoundButton
                onClick={goToTowing}
                theme='light'
                icon={ArrowRight}
                animation='group-hover:scale-125 group-hover:-rotate-45'
              />
            </CornerButtonContainer>
          </div>
        </div>
      </div>

      <div className='mt-2 hidden h-[64px] w-full items-center justify-center gap-2 overflow-hidden rounded-card bg-white max-md:flex'>
        <div className='w-full px-10'>
          <div className='flex w-full items-center justify-between border-b text-[16px]'>
            <div
              onClick={openQrCode}
              className={`-mb-[1px] w-[40%] cursor-pointer border-b-[1px] pb-[7px] text-center max-sm:text-[18px] ${isOnlyApp ? 'border-dark' : 'border-transparent'} ${isOnlyApp ? 'text-dark' : 'text-dark/50'}`}>
              Only App
            </div>
            <div
              onClick={openApp}
              className={`-mb-[1px] w-[60%] cursor-pointer border-b-[1px] pb-[7px] text-center max-sm:text-[18px] ${!isOnlyApp ? 'border-dark' : 'border-transparent'} ${!isOnlyApp ? 'text-dark' : 'text-dark/50'}`}>
              App & QR code
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
