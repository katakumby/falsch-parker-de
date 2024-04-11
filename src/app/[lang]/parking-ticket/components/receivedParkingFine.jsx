'use client';

import React from 'react';
import { PayFineButton } from '@/components/buttons/payFineButton';
import { ArrowDotButton } from '@/components/buttons/arrowDotButton';

export const ReceivedParkingFine = () => {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <div className='flex w-full max-w-[500px] flex-col items-center rounded-card bg-white p-[60px]'>
        <span className='pb-[30px] text-center text-3xl'>
          I received a parking fine.
        </span>
        <div className='flex items-center justify-center gap-5 max-md:flex-col'>
          <PayFineButton text='Pay fine' />
          <ArrowDotButton theme='dark'>Open complaint</ArrowDotButton>
        </div>
      </div>
    </div>
  );
};
