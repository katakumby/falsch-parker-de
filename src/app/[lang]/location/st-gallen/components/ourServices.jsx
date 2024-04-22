'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { ArrowRight } from '@/components/icons/arrowRight';
import { Cross } from '@/components/icons/cross';
import { ArrowLeft } from '@/components/icons/arrowLeft';
import BigCard from '@/images/towing-service/service-big-img.png';
import SmallCard from '@/images/towing-service/service-small-image.png';

const RenderButtons = ({ setScreen, isTwoScreen }) => {
  return (
    <>
      <div className='max-lg:hidden'>
        <CornerButtonContainer>
          <RoundButton
            theme='light'
            icon={ArrowRight}
            animation='group-hover:scale-125 group-hover:-rotate-45'
          />
        </CornerButtonContainer>
      </div>
      <div className='lg:hidden'>
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

export const OurServices = () => {
  const [isTwoScreen, setIsTwoScreen] = useState(false);
  const setScreen = (value) => {
    setIsTwoScreen(value);
  };

  return (
    <div className='h-full w-full overflow-hidden'>
      <div className='relative flex h-[700px] w-full overflow-hidden rounded-bl-card rounded-tl-card rounded-tr-card max-lg:hidden'>
        <div className='absolute z-[2] flex h-full flex-col justify-center pl-[100px] pr-[50px] text-2xl text-dark max-xl:w-[50%] lg:w-[50%] xl:w-[60%]'>
          <span className='pb-9 text-7xl max-xl:text-6xl'>
            Unsere Leistungen
          </span>
          <span className='text-xl max-md:text-lg max-sm:text-base'>
            Unser Abschleppservice in St. Gallen umfasst die rasche Entfernung
            von Fahrzeugen, die unberechtigt auf Privatgrundstücken geparkt
            haben. Ausgestattet mit modernster Technologie und einem erfahrenen
            Team gewährleisten wir, dass Ihre Parkplätze stets frei bleiben. Wir
            arbeiten eng mit Ihnen zusammen, um individuelle Lösungen zu finden
            und sicherzustellen, dass Ihre Parkplätze jederzeit zugänglich sind.
          </span>
        </div>
        <Image
          src={BigCard}
          fill
          alt='Big card'
          className='object-cover object-right'
        />
        <RenderButtons setScreen={setScreen} isTwoScreen={isTwoScreen} />
      </div>

      <div className='relative hidden h-[580px] max-lg:flex lg:hidden'>
        {isTwoScreen ? (
          <div className='flex w-full  items-center justify-center rounded-card bg-white px-10 max-md:h-[580px] max-md:w-full'>
            <div className='flex flex-col justify-between py-5 text-2xl text-dark'>
              <span className='pb-9 text-7xl max-md:text-3xl'>
                Unsere Leistungen
              </span>
              <span className='text-xl max-md:text-base'>
                Unser Abschleppservice in St. Gallen umfasst die rasche
                Entfernung von Fahrzeugen, die unberechtigt auf
                Privatgrundstücken geparkt haben. Ausgestattet mit modernster
                Technologie und einem erfahrenen Team gewährleisten wir, dass
                Ihre Parkplätze stets frei bleiben. Wir arbeiten eng mit Ihnen
                zusammen, um individuelle Lösungen zu finden und
                sicherzustellen, dass Ihre Parkplätze jederzeit zugänglich sind.
              </span>
            </div>
          </div>
        ) : (
          <div className='relative h-full w-full overflow-hidden  rounded-bl-card rounded-tl-card rounded-tr-card max-md:h-[580px] max-md:w-full max-md:pl-0'>
            <div className='absolute z-[2] p-7'>
              <span className='text-[50px] leading-none text-dark max-sm:text-3xl'>
                Unsere <br /> Leistungen.
              </span>
            </div>
            <Image
              src={SmallCard}
              fill
              alt='Small card'
              className='object-cover'
            />
          </div>
        )}
        <RenderButtons setScreen={setScreen} isTwoScreen={isTwoScreen} />
      </div>
    </div>
  );
};
