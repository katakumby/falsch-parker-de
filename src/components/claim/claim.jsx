'use client';

import React from 'react';
import Image from 'next/image';
import { OpenAppButton } from '@/components/buttons/openAppButton';
import ClaimImage from '@/images/global/claim.png';
import ClaimMobileImage from '@/images/global/claim-mobile.png';

export const Claim = () => {
  const openApp = () => {
    window.open('https://app.falsch-parker.ch/', '_blank');
  };

  return (
    <div className='relative h-[700px] w-full overflow-hidden rounded-card'>
      <div className='absolute left-0 z-[1] flex h-full items-center p-16 max-lg:items-end max-lg:p-8'>
        <div className='flex flex-col justify-between gap-10 text-white max-xl:max-w-[300px] max-lg:max-w-full max-lg:gap-6 xl:max-w-[500px] '>
          <h4 className='text-4xl max-md:text-2xl'>Umtriebsentschädigung.</h4>
          <span className='text-xl max-md:text-base'>
            Als Eigentümer oder Mieter eines Grundstücks haben Sie Anspruch auf
            eine Umtriebsentschädigung für den entstandenen Aufwand.
            Falsch-Parker.ch stellt die benötigte Infrastruktur bereit und
            übernimmt die gesamte Prozessabwicklung, Administration,
            telefonischem Support und Inkasso.
          </span>
          <div className='max-lg:self-center'>
            <OpenAppButton onClick={openApp} />
          </div>
        </div>
      </div>
      <Image
        src={ClaimImage}
        fill
        className='object-cover object-right max-lg:hidden'
        alt='Claim'
      />
      <Image
        src={ClaimMobileImage}
        fill
        className=' object-cover object-[right_0px_top_30%] lg:hidden'
        alt='Claim'
      />
    </div>
  );
};
