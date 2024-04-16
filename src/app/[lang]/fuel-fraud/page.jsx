import React from 'react';
import { Container } from '@/components/container/container';
import { FaqSection } from '@/components/faq/faqSection';
import { LargeImageWithDesc } from '@/components/largeImageWithDesc/largeImageWithDesc';
import MobileParkingCar from '@/images/home-page/mobil-parking-car.png';
import { DivideBanner } from '@/components/divideBanner/divideBanner';
import RefillIcon from '@/images/global/icons/divideIcons/refill.svg';
import BlankIcon from '@/images/global/icons/divideIcons/blank.svg';
import CoinIcon from '@/images/global/icons/divideIcons/coin.svg';
import { FullControl } from '@/components/fullControl/fullControl';
import FullControlFraudMobile from '@/images/full-fraud/fuel-fraud-mobile.png';
import FullControlFraud from '@/images/full-fraud/fuel-fraud.png';
import { SaveTimeAndMoney } from '@/components/saveTimeAndMoney/saveTimeAndMoney';
import { HaveReport } from '@/app/[lang]/fuel-fraud/components/haveReport';
import { SeeHowItWorks } from '@/components/seeHowItWorks/seeHowItWorks';
import { gasStationData } from '@/components/faq/faqData';
import { buildMetadata } from '@/utils/metadata';

export const metadata = buildMetadata('fuelFraud');

const FuelFraudPage = () => {
  return (
    <Container>
      <div className='mb-[170px] mt-[100px] max-md:mb-[60px]'>
        <DivideBanner
          title='Tankflucht - geeignet für Tankstellen mit einem Shop.'
          subtitle='Melden Sie mühelos und ohne technische Kenntnisse Tankfluchtverstösse in unsere Web-App und müssen sich nicht länger mit der Eintreibung ausstehender Tankbeträge und lästiger Telefonate herumschlagen.'
          images={[RefillIcon, BlankIcon, CoinIcon]}
        />
      </div>

      <HaveReport />

      <SeeHowItWorks />

      <LargeImageWithDesc
        image={MobileParkingCar}
        mobileClassesImg='ml-[16%] mt-[10%] object-contain max-md:ml-[16%] max-md:mt-[5%]'
        desktopClassesImg='ml-[16%] mt-[10%] object-contain max-md:ml-[18%] max-md:mt-[5%]'
        descDesktop={
          <div className='flex flex-col justify-between py-5 text-2xl text-dark'>
            <span className='pb-9 text-7xl'>
              Reduce <br /> fuel theft.
            </span>
            <span className='text-xl'>
              To ensure legal certainty, take a clear photo of the illegally
              parked vehicle with its license plate visible. Remember, a court
              prohibition notice is required for compensation claims.
            </span>
          </div>
        }
        descMobile={
          <div className='flex flex-col justify-between py-5 text-2xl text-dark'>
            <span className='pb-9 text-7xl max-md:text-4xl'>
              Reduce fuel theft.
            </span>
            <span className='text-xl'>
              To ensure legal certainty, take a clear photo of the illegally
              parked vehicle with its license plate visible. Remember, a court
              prohibition notice is required for compensation claims.
            </span>
          </div>
        }
      />

      <div className='mt-5'>
        <FullControl
          smallCover={FullControlFraudMobile}
          cover={FullControlFraud}
          subtitle='Im Dashboard können Sie den Zahlungsstatus einsehen und haben die Möglichkeit, jeden Bericht zu löschen, wenn ein zuvor unbezahlter Kunde zurückkommt und vor Ort bezahlt. Darüber hinaus können Sie jeden Bericht bei Bedarf ausdrucken.'
        />
      </div>

      <SaveTimeAndMoney />
      <FaqSection data={gasStationData} />
    </Container>
  );
};

export default FuelFraudPage;
