'use client';

import React from 'react';
import { ParkingCard } from '@/components/cards/parkingCard';
import { ParkingCardApp } from '@/components/cards/parkingCardApp';

const SmallCards = () => {
  const openApp = () => {
    window.open('https://app.falsch-parker.ch/', '_blank');
  };

  return (
    <div className='grid auto-rows-[250px] grid-cols-1 gap-5 max-lg:grid-cols-3 max-[900px]:grid-cols-2 max-sm:grid-cols-1'>
      <ParkingCard
        type='businessParking'
        onClick={openApp}
        text={
          <h4 className=''>
            Falschparker auf Ihrem <br />
            <span className='rounded-md bg-light px-2 leading-10 text-black'>
              Geschäftsparkplatz?
            </span>
          </h4>
        }
      />
      <ParkingCard
        type='privateParking'
        onClick={openApp}
        text={
          <h4>
            Falschparker auf Ihrem <br />
            <span className='rounded-md bg-black px-2 leading-10 text-white'>
              Privatparkplatz?
            </span>
          </h4>
        }
      />
      <ParkingCardApp
        onClick={openApp}
        text={
          <div className='text-xl text-white	'>
            <span className='text-green'>Web-App öffnen, </span> um alle <br />{' '}
            Funktionen zu nutzen.
          </div>
        }
      />
    </div>
  );
};

export default SmallCards;
