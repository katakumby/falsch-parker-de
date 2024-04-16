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
        <div className='my-[172px] max-md:mb-[40px] max-md:mt-[60px]'>
          <DivideBanner
            sectionTitles={[
              'Videoüberwachung & KI',
              'White label Lösung',
              'Parkbussen',
            ]}
            title='Weitere Produkte, die wir unseren Kunden anbieten.'
            subtitle='Entdecken Sie, wie wir KI einsetzen, um Falschparker
            zu erkennen, und erfahren Sie mehr über unsere White-Label-Lösung für Unternehmen.'
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
