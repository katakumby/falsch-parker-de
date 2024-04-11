import React, { useState } from 'react';
import Image from 'next/image';
import RefillImage from '../../../../../../../../public/images/global/refill.png';
import RefillMobileImage from '../../../../../../../../public/images/global/refill-mobile.png';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { ArrowLeft } from '@/components/icons/arrowLeft';
import { Cross } from '@/components/icons/cross';

export const TheProblemSection = () => {
  const [isTwoScreen, setIsTwoScree] = useState(false);
  return (
    <div className='relative h-[700px] w-full overflow-hidden rounded-bl-card rounded-tl-card rounded-tr-card bg-black'>
      {isTwoScreen ? (
        <div className='absolute top-0 z-[1] flex h-full w-full flex-col items-center justify-center'>
          <div className='max-w-[650px] text-2xl text-white max-md:px-5 max-md:text-xl'>
            <div className='pb-6 text-white/50 '>
              People are filling up their cars and not paying
            </div>
            <div>
              The problem of people filling up their cars with fuel and not
              paying has become a significant concern, causing financial losses
              and administrative burdens for fuel stations and potential price
              increases for honest customers.
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className='absolute top-0 z-[1] flex flex-col p-20 max-sm:p-10'>
            <span className='self-start rounded-full bg-white/10 px-4 py-3 text-white max-sm:px-4 max-sm:py-3 max-sm:text-[14px]'>
              The problem
            </span>
            <span className='mt-6 max-w-[800px] text-8xl text-white max-lg:text-5xl max-sm:text-[42px]'>
              <span className='text-white/50'>Vehicles are refueling</span>{' '}
              without payment.
            </span>
          </div>

          <Image
            src={RefillImage}
            fill
            alt='Refill'
            className='object-cover object-right max-sm:hidden'
          />

          <Image
            src={RefillMobileImage}
            fill
            alt='Refill'
            className='object-cover object-right sm:hidden'
          />
        </>
      )}

      <CornerButtonContainer>
        <RoundButton
          className='relative z-[1]'
          theme='dark'
          icon={isTwoScreen ? ArrowLeft : Cross}
          onClick={() => setIsTwoScree((prev) => !prev)}
          animation={`group-hover:scale-125 ${!isTwoScreen && 'group-hover:-rotate-90'}`}
        />
      </CornerButtonContainer>
    </div>
  );
};
