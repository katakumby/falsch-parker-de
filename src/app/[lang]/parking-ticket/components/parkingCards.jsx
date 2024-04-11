'use client';

import React from 'react';
import Image from 'next/image';
import ParkingGuard from '@/images/parking-ticket/parking-guard.png';
import ParkingTicket from '@/images/parking-ticket/parking-ticket.png';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { ArrowRight } from '@/components/icons/arrowRight';

export const ParkingCards = () => {
  return (
    <div className='relative flex  w-full gap-5 max-md:flex-col'>
      <div className='relative h-[730px] w-full max-w-[670px] overflow-hidden max-xl:h-[440px]'>
        <div className='h-full w-full overflow-hidden '>
          <div className='absolute z-[2] flex flex-col p-10 text-white max-sm:p-6'>
            <span className='mb-5 self-start  rounded-full bg-black/10 p-4 text-dark max-sm:p-2 max-sm:text-[14px]'>
              Parking ticket
            </span>
          </div>

          <Image
            src={ParkingTicket}
            alt='Parking Ticket'
            className='rounded-card object-cover'
            fill
          />

          <CornerButtonContainer>
            <RoundButton
              icon={ArrowRight}
              onClick={() => {}}
              className='bg-[#FFFFFF] text-black'
              animation='group-hover:scale-125 group-hover:-rotate-45'
            />
          </CornerButtonContainer>
        </div>
      </div>

      <div className='relative h-[730px] w-full max-w-[670px] overflow-hidden max-xl:h-[440px]'>
        <div className='h-full w-full overflow-hidden'>
          <div className='absolute z-[2] flex flex-col p-10 text-white max-sm:p-6'>
            <span className='mb-5 self-start rounded-full bg-white/10 p-4 max-sm:p-2 max-sm:text-[14px]'>
              Parking ticket
            </span>

            <span className='text-[46px] max-xl:text-[30px] max-md:text-2xl'>
              We patrol your business parking spaces{' '}
              <span className='text-white/50'>
                with professional guards on your reguest.
              </span>
            </span>
          </div>
          <Image
            src={ParkingGuard}
            alt='Parking Guard'
            className='rounded-card object-cover'
            fill
          />

          <CornerButtonContainer>
            <RoundButton
              icon={ArrowRight}
              onClick={() => {}}
              className='bg-[#085F73] text-white'
              animation='group-hover:scale-125 group-hover:-rotate-45'
            />
          </CornerButtonContainer>
        </div>
      </div>
    </div>
  );
};
