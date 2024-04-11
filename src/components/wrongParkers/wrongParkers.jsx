'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import WrongBusinessParking from '@/images/global/wrong-business-parking.png';
import WrongPrivateParking from '@/images/global/wrong-private-parking.png';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { ArrowRight } from '@/components/icons/arrowRight';

export const WrongParkers = () => {
  const renderItem = useCallback((text, image) => {
    return (
      <div className='relative overflow-hidden'>
        <div className='flex h-[250px] w-full overflow-hidden rounded-card bg-white p-4 max-lg:h-[160px] max-lg:w-full max-lg:p-2'>
          <div className='relative aspect-square h-full max-md:aspect-[1/1.4]'>
            <Image
              src={image}
              alt='Our service'
              className='rounded-[calc(32px-16px)] object-cover max-lg:rounded-[calc(32px-8px)]'
              fill
            />
          </div>
          <div className='self-center px-10'>
            <span className='text-4xl max-xl:text-3xl max-md:text-2xl max-sm:text-xl'>
              <span className='text-dark/50'>Wrong parkers on your</span> {text}
            </span>
          </div>
        </div>
        <CornerButtonContainer>
          <RoundButton
            icon={ArrowRight}
            theme='light'
            animation='group-hover:scale-125 group-hover:-rotate-45'
          />
        </CornerButtonContainer>
      </div>
    );
  }, []);

  return (
    <div className='grid grid-cols-2 gap-5 max-lg:grid-cols-1'>
      {renderItem('business parking?', WrongBusinessParking)}
      {renderItem('private parking?', WrongPrivateParking)}
    </div>
  );
};
