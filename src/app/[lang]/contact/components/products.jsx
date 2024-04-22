'use client';

import React from 'react';
import { ProductCard } from '@/components/cards/productCard';
import { ArrowRight } from '@/components/icons/arrowRight';

const data = [
  {
    title: 'Falschparker büssen.',
    subtitle:
      'Verhängen Sie Umtreibsentschädigungen auf Privatparkplätze. Für Unternehmen und Privatpersonen.',
    image: 'noParking',
  },
  {
    title: 'Falschparker abschleppen.',
    subtitle:
      'Schleppen Sie Falschparker auf Privatgrund ab. Bestellen Sie einen Abschleppwagen aus unserem Abschlepp-Pool.',
    image: 'truck',
  },
  {
    title: 'Tankflucht melden.',
    subtitle:
      'Über die App können Sie eine Tankflucht innerhalb von 1 Minute erfassen.',
    image: 'gasStation',
  },
];

const Products = () => {
  return (
    <div className='mt-16 max-md:mt-10'>
      <div className='no-scrollbar overflow-x-auto'>
        <div className='flex w-fit gap-5'>
          {data.map((item, index) => (
            <ProductCard
              titleComponent={`h${index + 1}`}
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              type={item.image}
              className='bg-[#2a2a2a]'
              icon={ArrowRight}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Products };
