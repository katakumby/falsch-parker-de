'use client';

import React from 'react';
import { Container } from '@/components/container/container';
import { ProductCard } from '@/components/cards/productCard';
import { ArrowRight } from '@/components/icons/arrowRight';
import { FaqSection } from '@/components/faq/faqSection';

const data = [
  {
    title: 'Need to fine wrong parkers?',
    subtitle:
      'Legally issue a parking fine on private property. For individuals and companies.',
    image: 'noParking',
  },
  {
    title: 'Need to tow wrong parkers?',
    subtitle: 'Join the network now and get verified towing jobs over the app.',
    image: 'truck',
  },
  {
    title: 'Have to report a fuel fraud',
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
