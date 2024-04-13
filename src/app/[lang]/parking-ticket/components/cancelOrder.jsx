import React from 'react';
import Image from 'next/image';
import CancelOrderMob from '@/images/parking-ticket/cancel-order-mob.png';
import CancelOrderDesk from '@/images/parking-ticket/cancel-order-desk.png';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { Cross } from '@/components/icons/cross';

export const CancelOrder = () => {
  return (
    <div className='relative h-full w-full overflow-hidden rounded-bl-card rounded-tl-card rounded-tr-card'>
      <div className='hidden h-[697px] w-full justify-end lg:flex'>
        <div className='z-[2] flex h-full items-center justify-center p-7 lg:w-[45%] xl:w-[55%]'>
          <span className='pl-10 leading-none text-dark lg:text-[58px] xl:pr-10 xl:text-[78px] '>
            Einfaches Löschen <br />
            <span className='text-dark/50'>von Parkbussen über die App.</span>
          </span>
        </div>
        <Image
          src={CancelOrderDesk}
          fill
          alt='No Parking'
          className='object-cover object-left'
        />
      </div>
      <div className='relative hidden h-[580px] w-full overflow-hidden rounded-bl-card rounded-tl-card rounded-tr-card max-lg:flex'>
        <div className='z-[2] w-full p-7 text-center text-[35px] leading-tight text-dark'>
          Einfaches Löschen <br />
          <span className='text-dark/50'>von Parkbussen über die App.</span>
        </div>
        <Image
          src={CancelOrderMob}
          fill
          alt='No Parking'
          className='object-cover object-center'
        />
      </div>

      <div className='relative z-[3]'>
        <CornerButtonContainer>
          <RoundButton
            icon={Cross}
            theme='light'
            animation='group-hover:scale-125 group-hover:-rotate-90'
            className='bg-[#0D0F11] text-dark'
          />
        </CornerButtonContainer>
      </div>
    </div>
  );
};
