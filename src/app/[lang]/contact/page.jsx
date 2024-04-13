'use client';

import React from 'react';
import { Container } from '@/components/container/container';
import { ProductCard } from '@/components/cards/productCard';
import { ArrowRight } from '@/components/icons/arrowRight';
import { FaqSection } from '@/components/faq/faqSection';

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
    subtitle: 'Our app requires only 2 minutes of processing time.',
    image: 'gasStation',
  },
];

const ContactPage = () => {
  return (
    <Container>
      <div className='mt-16 max-md:mt-10'>
        <div className='no-scrollbar overflow-x-auto'>
          <div className='flex w-fit gap-5'>
            {data.map((item, index) => (
              <ProductCard
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

      <FaqSection />
    </Container>
  );
};

export default ContactPage;
