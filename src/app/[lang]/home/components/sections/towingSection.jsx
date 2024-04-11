import React from 'react';
import { useRouter } from 'next/navigation';
import { Element } from 'react-scroll';
import { Container } from '@/components/container/container';
import { DivideBanner } from '@/components/divideBanner/divideBanner';
import EyeIcon from '@/images/global/icons/divideIcons/eye.svg';
import PhotoIcon from '@/images/global/icons/divideIcons/photo.svg';
import Towing from '@/images/global/icons/divideIcons/towing.svg';
import { TrackTowingSection } from '@/app/[lang]/home/components/sections/components/towingSections/trackTowingSection';
import { Uber } from '@/components/uber/uber';
import { SeeHowItWorks } from '@/components/seeHowItWorks/seeHowItWorks';
import MobileParkingCar from '@/images/home-page/mobil-parking-car.png';
import { LargeImageWithDesc } from '@/components/largeImageWithDesc/largeImageWithDesc';

export const TowingSection = () => {
  const router = useRouter();
  const goToTowing = () => {
    router.push('/towing');
  };

  return (
    <Container>
      <Element name='towing' className='my-[170px] max-md:my-[100px]'>
        <DivideBanner
          sectionTitles={['Towing']}
          title='Tow from business and private parkings now.'
          subtitle='We have 60 cars in our towing car pool and more than 12 towing companies are connected to our app.'
          images={[EyeIcon, PhotoIcon, Towing]}
        />
      </Element>
      <div>
        <Uber />
      </div>
      <SeeHowItWorks />
      <LargeImageWithDesc
        onClick={goToTowing}
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
        <TrackTowingSection />
      </div>
    </Container>
  );
};
