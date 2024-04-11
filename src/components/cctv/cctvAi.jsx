'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import OurService from '@/images/home-page/ourService.png';
import CTTVAiImage from '@/images/global/cttv-ai.png';
import CTTVAiMobileImage from '@/images/global/cttv-ai-mobile.png';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { ArrowLeft } from '@/components/icons/arrowLeft';
import { Cross } from '@/components/icons/cross';

export const CCTVAi = () => {
  const [isTwoScreen, setIsTwoScree] = useState(false);
  return (
    <div className='relative h-[697px] w-full overflow-hidden rounded-bl-card rounded-tl-card rounded-tr-card bg-dark max-md:h-[440px]'>
      {isTwoScreen ? (
        <div className='relative flex h-full'>
          <div className='relative h-full w-[50%] max-lg:w-0'>
            <Image
              src={OurService}
              alt='Our service'
              className='mt-[120px] object-contain'
              fill
            />
          </div>
          <div className='flex h-full w-[50%] flex-col justify-center p-5 text-2xl text-white max-lg:w-full max-lg:text-2xl max-md:text-base lg:max-w-[650px] '>
            <span className='pb-6 text-white/50 max-md:pb-3'>
              Automated parking fines
            </span>
            <span className='max-md:text-base max-sm:p-2 max-sm:text-sm'>
              Beginning January 2024, we will introduce a groundbreaking feature
              in our parking app: integrating closed-circuit television (CCTV)
              with AI support. This upgrade allows for effortless monitoring of
              parking spaces and visitors, removing the need for physical
              inspections. <br />
              Our advanced AI efficiently identifies authorized parking and
              autonomously issues tickets for unauthorized vehicles after a
              specified time. This innovative solution streamlines parking
              surveillance, enhances efficiency, and ensures orderly parking
              space usage without manual intervention.
            </span>
          </div>
        </div>
      ) : (
        <div className='relative h-full w-full'>
          <div className='absolute bottom-[100px] left-[100px] z-[1] flex flex-col max-md:bottom-[40px] max-md:left-[40px] max-md:right-[40px]'>
            <span className='gradient-text bg-gradient-to-r from-white/50 to-white bg-clip-text text-8xl text-transparent max-md:text-5xl'>
              <span className='max-lg:text-5xl max-sm:hidden'>
                Your CCTV & <br /> our AI automation.
              </span>
              <span className='text-4xl sm:hidden'>
                Your <br /> CCTV <br />& our AI <br /> automation.
              </span>
            </span>
            <span className='gradient-text bg-gradient-to-r from-white/30 to-white/70 bg-clip-text pt-10 text-4xl text-transparent max-md:text-base '>
              Connect your CCTV infrastructure to our app.
            </span>
          </div>
          <Image
            src={CTTVAiImage}
            alt='Cttv ai'
            className='object-cover object-right max-sm:hidden'
            fill
          />
          <Image
            src={CTTVAiMobileImage}
            alt='Cttv ai'
            className='object-cover object-right-top sm:hidden'
            fill
          />
        </div>
      )}

      <CornerButtonContainer>
        <RoundButton
          icon={isTwoScreen ? ArrowLeft : Cross}
          theme='dark'
          onClick={() => setIsTwoScree((prev) => !prev)}
          animation={`group-hover:scale-125 ${!isTwoScreen && 'group-hover:-rotate-90'}`}
        />
      </CornerButtonContainer>
    </div>
  );
};
