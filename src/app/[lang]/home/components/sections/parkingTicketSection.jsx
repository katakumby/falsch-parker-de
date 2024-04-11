import React from 'react';
import { Element } from 'react-scroll';
import { Container } from '@/components/container/container';
import EyeIcon from '@/images/global/icons/divideIcons/eye.svg';
import FormIcon from '@/images/global/icons/divideIcons/form.svg';
import MarkIcon from '@/images/global/icons/divideIcons/mark.svg';
import PhotoIcon from '@/images/global/icons/divideIcons/photo.svg';
import { DivideBanner } from '@/components/divideBanner/divideBanner';
import { NoParking } from '@/components/noParking/noParking';

export const ParkingTicketSection = () => {
  const targetElement = 'howItWorks';
  return (
    <Container>
      <Element name='parking-ticket' className='my-[170px] max-md:my-[100px]'>
        <DivideBanner
          sectionTitles={['Parking ticket']}
          title='Execute parking ticket on your business parkings now.'
          subtitle='All from your phone! Use falsch-parker for hassle-free reporting of illegal parking.'
          images={[EyeIcon, FormIcon, MarkIcon, PhotoIcon]}
        />
      </Element>
      <NoParking targetElement={targetElement} />
    </Container>
  );
};
