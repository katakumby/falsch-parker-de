'use client';

import React from 'react';
import Image from 'next/image';
import ParkingManagementImage from '@/images/parking-ticket/parking-management.png';
import ParkingManagementMobileImage from '@/images/parking-ticket/parking-management-mobile.png';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { Cross } from '@/components/icons/cross';

export const ParkingManagement = () => {
  return (
    <div className='relative h-[700px] w-full overflow-hidden  max-md:h-[580px]'>
      <div className='relative h-full w-full overflow-hidden rounded-card'>
        <div className='absolute left-0 z-[1] h-full p-16 max-sm:p-8'>
          <div className='flex h-full max-h-[355px] w-full max-w-[700px] flex-col text-white'>
            <span className='self-start rounded-full bg-white/10 p-4 max-sm:p-2 max-sm:text-[14px]'>
              Parking management
            </span>
            <h4 className='mt-6 text-7xl text-white max-md:text-5xl max-sm:text-[30px]'>
              <span className='text-white/50'>Simplify your parking with</span>{' '}
              automatic parking management.
            </h4>
          </div>
        </div>
        <Image
          src={ParkingManagementImage}
          fill
          className='object-cover object-center max-sm:hidden'
          alt='No Parking'
        />
        <Image
          src={ParkingManagementMobileImage}
          fill
          className='object-cover object-center sm:hidden'
          alt='No Parking'
        />
      </div>

      <CornerButtonContainer>
        <RoundButton
          icon={Cross}
          onClick={() => {}}
          className='relative z-[2] bg-[#99BFCC] text-white'
          animation='group-hover:scale-125 group-hover:-rotate-90'
        />
      </CornerButtonContainer>
    </div>
  );
};
