import React from 'react';
import { Container } from '@/components/container/container';
import Refill from '@/images/global/icons/divideIcons/refill.svg';
import Coin from '@/images/global/icons/divideIcons/coin.svg';
import Clipboard from '@/images/global/icons/divideIcons/clipboard.svg';
import { Heading } from './components/heading';
import { Content } from './components/content';

const Page = () => {
  return (
    <Container>
      <div className='my-20 grid gap-y-40 max-md:my-10 max-md:gap-y-20'>
        <Heading
          icons={[Refill, Clipboard, Coin]}
          title='Towing service Zurich.'
          subtitle='Parking illegally on private property
          is a criminal offense and can have both criminal
          and civil consequences. As a towing company in
          Zurich, we specialize in removing illegal parking on
          private property, issuing inconvenience compensation
          and allowing our customers legal access to their
          parking spaces. Our towing services in Zurich are
          fast, reliable, professional and available to you 24/7.'
        />
        <Content />
      </div>
    </Container>
  );
};

export default Page;
