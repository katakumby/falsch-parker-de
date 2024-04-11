import React from 'react';
import { Container } from '@/components/container/container';
import { FaqSection } from '@/components/faq/faqSection';
import { FullControl } from '@/components/fullControl/fullControl';
import FullControlTowing from '@/images/full-fraud/towing.png';
import FullControlTowingMobile from '@/images/full-fraud/towing-mobile.png';
import { DivideBanner } from '@/components/divideBanner/divideBanner';
import EyeIcon from '@/images/global/icons/divideIcons/eye.svg';
import PhotoIcon from '@/images/global/icons/divideIcons/photo.svg';
import TowingIcon from '@/images/global/icons/divideIcons/towing.svg';
import { Uber } from '@/components/uber/uber';
import { WrongParkers } from '@/components/wrongParkers/wrongParkers';
import { LargeImageWithDesc } from '@/components/largeImageWithDesc/largeImageWithDesc';
import MobileParkingCar from '@/images/home-page/mobil-parking-car.png';
import { SeeHowItWorks } from '@/components/seeHowItWorks/seeHowItWorks';
import { TowingPool } from '@/app/[lang]/towing/components/towingPool';

const TowingPage = () => {
  return (
    <Container>
      <section>
        <div className='mt-20 max-md:mt-[100]'>
          <DivideBanner
            title='Tow from business and private parkings now.'
            subtitle='You’re allowed to tow wrong parkers on your private parking.'
            images={[EyeIcon, PhotoIcon, TowingIcon]}
          />
        </div>
        <div className='mt-[170px] max-md:mt-[100px]'>
          <Uber />
        </div>
      </section>

      <section>
        <SeeHowItWorks />
        <LargeImageWithDesc
          image={MobileParkingCar}
          mobileClassesImg='ml-[16%] mt-[10%] object-contain max-md:ml-[16%] max-md:mt-[5%]'
          desktopClassesImg='ml-[16%] mt-[10%] object-contain max-md:ml-[18%] max-md:mt-[5%]'
          descDesktop={
            <div className='flex flex-col justify-between py-5 text-2xl text-dark'>
              <span className='pb-9 text-7xl'>Tow away.</span>
              <span className='text-xl'>
                To ensure legal certainty, take a clear photo of the illegally
                parked vehicle with its license plate visible. Remember, a court
                prohibition notice is required for compensation claims.
              </span>
            </div>
          }
          descMobile={
            <div className='flex flex-col justify-between py-5 text-2xl text-dark'>
              <span className='pb-9 text-7xl max-md:text-4xl'>Tow away.</span>
              <span className='text-xl'>
                To ensure legal certainty, take a clear photo of the illegally
                parked vehicle with its license plate visible. Remember, a court
                prohibition notice is required for compensation claims.
              </span>
            </div>
          }
        />

        <div className='mt-5'>
          <WrongParkers />
        </div>

        <div className='mt-5'>
          <FullControl
            smallCover={FullControlTowingMobile}
            cover={FullControlTowing}
            subtitle='Over the app and dashboard you can
        order nearest Towing car free of charge. And
        you can see all details in real time.'
          />
        </div>

        <div className='mt-5'>
          <TowingPool />
        </div>
      </section>

      <FaqSection />
    </Container>
  );
};

export default TowingPage;
