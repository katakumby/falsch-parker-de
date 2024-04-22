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
      <Element name='towing' className='my-[170px] max-md:my-[60px]'>
        <DivideBanner
          sectionTitles={['Abschleppdienst']}
          titleComponent='h3'
          title='Jetzt auf Firmen - und Privatparkplätzen abschleppen.'
          subtitle='Unser Abschleppdienstleister-Netzwerk besteht aus
          verschiedenen Unternehmen in Ihrer Umgebung. Durch die automatische
          Erfassung der nahegelegenen Abschleppfahrer mittels GPS-Signal wird
          eine schnelle Ankunftszeit des Abschleppwagens am Einsatzort sichergestellt.'
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
            <span className='pb-9 text-7xl'>Abschleppen lassen.</span>
            <span className='text-xl'>
              Um Rechtssicherheit zu gewährleisten, machen Sie ein gut
              sichtbares Foto des illegal geparkten Fahrzeugs mit sichtbarem
              Kennzeichen.
            </span>
          </div>
        }
        descMobile={
          <div className='flex flex-col justify-between py-5 text-2xl text-dark'>
            <span className='pb-9 text-7xl max-md:text-4xl'>
              Abschleppen lassen.
            </span>
            <span className='text-xl'>
              Um Rechtssicherheit zu gewährleisten, machen Sie ein gut
              sichtbares Foto des illegal geparkten Fahrzeugs mit sichtbarem
              Kennzeichen.
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
