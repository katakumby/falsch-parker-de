'use client';

import React from 'react';
import Image from 'next/image';
import { ParkingCard } from '@/components/cards/parkingCard';
import { ParkingCardApp } from '@/components/cards/parkingCardApp';
import { Container } from '@/components/container/container';
import { MainOpenAppShape } from '@/app/[lang]/home/components/sections/components/mainOpenAppShape';
import MainBanner from '@/images/home-page/main-banner.png';
import styles from './styles.module.scss';
import cl from 'classnames';

export const MainSection = () => {
  const openApp = () => {
    window.open('https://app.falsch-parker.ch/', '_blank');
  };

  return (
    <Container>
      <div className='flex gap-5 max-lg:flex-col'>
        <div className='relative h-[795px] w-full bg-light max-lg:h-[540px]'>
          <MainOpenAppShape />
          <Image
            src={MainBanner}
            fill
            alt='Falsch-parker logo'
            className='rounded-card object-cover'
          />
        </div>
        <div
          className={cl(
            styles.customGridCols,
            'relative flex place-items-center gap-5 max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1 lg:flex-col'
          )}>
          <ParkingCard
            type='businessParking'
            onClick={openApp}
            text={
              <div className=''>
                Wrong parkers on your <br />
                <span className='rounded-md bg-light px-2 leading-10 text-black'>
                  business parking?
                </span>
              </div>
            }
          />
          <ParkingCard
            type='privateParking'
            onClick={openApp}
            text={
              <div>
                Wrong parkers on your <br />
                <span className='rounded-md bg-black px-2 leading-10 text-white'>
                  private parking?
                </span>
              </div>
            }
          />
          <ParkingCardApp
            onClick={openApp}
            text={
              <div className='text-3xl text-white	'>
                <span className='text-green'>Open app </span> to <br /> get all
                features
              </div>
            }
          />
        </div>
      </div>
    </Container>
  );
};
