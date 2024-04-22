import React from 'react';
import { Element } from 'react-scroll';
import { Container } from '@/components/container/container';
import { DivideBanner } from '@/components/divideBanner/divideBanner';
import RefillIcon from '@/images/global/icons/divideIcons/refill.svg';
import CoinIcon from '@/images/global/icons/divideIcons/coin.svg';
import LikeIcon from '@/images/global/icons/divideIcons/like.svg';
import { TheProblemSection } from '@/app/[lang]/home/components/sections/components/fuelFroundSections/theProblemSection';
import { HowItWorksSection } from '@/app/[lang]/home/components/sections/components/fuelFroundSections/howItWorksSection';
import { SaveTimeAndMoney } from '@/components/saveTimeAndMoney/saveTimeAndMoney';

export const FuelFraudSection = () => {
  return (
    <Container>
      <Element name='fuel-fraud' className='my-[170px] max-md:my-[60px]'>
        <DivideBanner
          sectionTitles={['Tankflucht']}
          titleComponent='span'
          title='Den Verwaltungsaufwand für Fälle von Tankflucht auf 2 Minuten
              minimieren.'
          subtitle='Unsere digitale Lösung bietet Tankstellenbetreibern die höchste Effizient zur Behandlung von Tankfluchtverstösse.'
          images={[RefillIcon, CoinIcon, LikeIcon]}
        />
      </Element>
      <TheProblemSection />
      <HowItWorksSection />
      <SaveTimeAndMoney />
    </Container>
  );
};
