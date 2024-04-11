import React from 'react';
import { Container } from '@/components/container/container';
import { DivideBanner } from '@/components/divideBanner/divideBanner';
import VideoCamera from '@/images/global/icons/divideIcons/videoСamera.svg';
import Picture from '@/images/global/icons/divideIcons/picture.svg';
import Blank from '@/images/global/icons/divideIcons/blank.svg';
import { ParkingTicketSection } from '@/app/[lang]/home/components/sections/components/otherFeaturesSection/parkingTicketSection';
import { CCTVAi } from '@/components/cctv/cctvAi';

export const OtherFeaturesSection = () => {
  return (
    <Container>
      <div>
        <div className='my-[172px] max-md:mb-[40px] max-md:mt-[100px]'>
          <DivideBanner
            sectionTitles={[
              'CCTV & AI',
              'White label solution',
              'Parking ticket',
            ]}
            title='Other features we offer for our clients.'
            subtitle='Learn how we use AI to help you fine wrong parkers. And discover our white label solution for companies.'
            images={[VideoCamera, Picture, Blank]}
          />
        </div>
        <div className='mb-5'>
          <CCTVAi />
        </div>
        <ParkingTicketSection />
      </div>
    </Container>
  );
};
