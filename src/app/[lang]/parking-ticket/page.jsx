import React from 'react';
import { Container } from '@/components/container/container';
import { FaqSection } from '@/components/faq/faqSection';
import { DivideBanner } from '@/components/divideBanner/divideBanner';
import BlankIcon from '@/images/global/icons/divideIcons/blank.svg';
import PortfolioIcon from '@/images/parking-ticket/icons/portfolio.svg';
import { NoParking } from '@/components/noParking/noParking';
import { SeeHowItWorks } from '@/components/seeHowItWorks/seeHowItWorks';
import { AppDescription } from '@/components/appDescription/appDescription';
import { WrongParkers } from '@/components/wrongParkers/wrongParkers';
import { Claim } from '@/components/claim/claim';
import { ParkingManagement } from '@/app/[lang]/parking-ticket/components/parkingManagement';
import { ParkingCards } from '@/app/[lang]/parking-ticket/components/parkingCards';
import { CCTVAi } from '@/components/cctv/cctvAi';
import { ReceivedParkingFine } from '@/app/[lang]/parking-ticket/components/ReceivedParkingFine';
import { CancelOrder } from '@/app/[lang]/parking-ticket/components/cancelOrder';

const ParkingTicketPage = () => {
  const targetElement = 'parking-ticket-how-it-works';
  return (
    <Container>
      <div className='mb-[172px] mt-[80px] max-md:mb-[100px]'>
        <DivideBanner
          title='Execute parking ticket on your business parkings now.'
          subtitle='On your business and private parkings you’re allowed to fine wrong parkers. Our app provides you with the infrastructure to execute parking fines with few clicks. Our app is fully automized and we take care of everything what happens after you create the fine'
          images={[BlankIcon, PortfolioIcon]}
        />
      </div>

      <NoParking targetElement={targetElement} />

      <section>
        <SeeHowItWorks targetRef={targetElement} />
        <AppDescription />
        <WrongParkers />
      </section>

      <div className='mt-[20px] max-md:mb-[100px] md:mb-[172px]'>
        <Claim />
      </div>

      <ParkingManagement />

      <div className='my-5 md:my-[150px]'>
        <ParkingCards />
      </div>

      <CCTVAi />

      <div className='max-md:mt-5 md:mt-[172px]'>
        <CancelOrder />
      </div>

      <FaqSection />

      <div className='max-md:mb-[100px] md:mb-[80px]'>
        <ReceivedParkingFine />
      </div>
    </Container>
  );
};

export default ParkingTicketPage;
