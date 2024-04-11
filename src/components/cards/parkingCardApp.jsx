import React from 'react';
import Image from 'next/image';
import MobileLogo from '@/images/home-page/mobile-logo.png';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { ArrowRight } from '@/components/icons/arrowRight';

export const ParkingCardApp = ({ text, onClick }) => {
  return (
    <div className='relative flex h-[205px] w-[250px] flex-col content-between justify-between rounded-card bg-black p-4 max-lg:w-[340px]'>
      <span className='mt-4'>{text}</span>
      <Image
        src={MobileLogo}
        width={50}
        height={50}
        className='rounded-[18px]'
        alt='Mobile Falsch-parker logo'
      />
      <CornerButtonContainer>
        <RoundButton
          icon={ArrowRight}
          onClick={onClick}
          className='bg-[#0D0F11] text-white'
          animation='group-hover:scale-125 group-hover:-rotate-45'
        />
      </CornerButtonContainer>
    </div>
  );
};
