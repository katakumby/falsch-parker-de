'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { ArrowRight } from '@/components/icons/arrowRight';
import { Cross } from '@/components/icons/cross';
import { ArrowLeft } from '@/components/icons/arrowLeft';

const RenderButtons = ({ setScreen, isTwoScreen, onClick }) => {
  const goToBlock = () => {};

  return (
    <>
      <div className='max-md:hidden'>
        <CornerButtonContainer>
          <RoundButton
            onClick={onClick || goToBlock}
            theme='light'
            icon={ArrowRight}
            animation='group-hover:scale-125 group-hover:-rotate-45'
          />
        </CornerButtonContainer>
      </div>
      <div className='md:hidden'>
        <CornerButtonContainer>
          <RoundButton
            theme='light'
            icon={!isTwoScreen ? Cross : ArrowLeft}
            onClick={() => setScreen((prev) => !prev)}
            animation={`group-hover:scale-125 ${!isTwoScreen && 'group-hover:-rotate-90'}`}
          />
        </CornerButtonContainer>
      </div>
    </>
  );
};

export const LargeImageWithDesc = ({
  image,
  descDesktop,
  descMobile,
  mobileClassesImg,
  desktopClassesImg,
  onClick,
}) => {
  const [isTwoScreen, setIsTwoScreen] = useState(false);
  const setScreen = (value) => {
    setIsTwoScreen(value);
  };

  return (
    <div className='relative overflow-hidden'>
      <div className='relative hidden h-[760px] rounded-card bg-white max-md:h-[580px] md:flex'>
        <div className='relative h-full w-1/2 overflow-hidden max-md:w-full max-md:pl-0'>
          <Image
            src={image}
            fill
            alt='No Parking'
            className={desktopClassesImg}
          />
        </div>
        <div className='flex h-[760px] w-1/2 items-center justify-center pr-10 max-md:hidden'>
          {descDesktop}
        </div>

        <RenderButtons
          setScreen={setScreen}
          isTwoScreen={isTwoScreen}
          onClick={onClick}
        />
      </div>

      <div className='relative hidden h-[760px] rounded-card bg-white max-md:flex max-md:h-[580px] lg:hidden'>
        {isTwoScreen ? (
          <div className='flex h-[760px] w-1/2 items-center justify-center px-10 max-md:h-[580px] max-md:w-full'>
            {descMobile}
          </div>
        ) : (
          <div className='relative h-full w-full overflow-hidden max-md:h-[580px] max-md:w-full max-md:pl-0'>
            <Image
              src={image}
              fill
              alt='No Parking'
              className={mobileClassesImg}
            />
          </div>
        )}
        <RenderButtons setScreen={setScreen} isTwoScreen={isTwoScreen} />
      </div>
    </div>
  );
};
