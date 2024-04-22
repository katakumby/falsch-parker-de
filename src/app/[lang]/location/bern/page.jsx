import React from 'react';
import { Container } from '@/components/container/container';
import Refill from '@/images/global/icons/divideIcons/refill.svg';
import Coin from '@/images/global/icons/divideIcons/coin.svg';
import Clipboard from '@/images/global/icons/divideIcons/clipboard.svg';
import { Heading } from './components/heading';
import { Content } from './components/content';
import { buildLocationMetadata } from '@/utils/metadata';

export const metadata = buildLocationMetadata('Bern');

const Page = () => {
  return (
    <Container>
      <div className='my-20 grid gap-y-40 max-md:my-10 max-md:gap-y-20'>
        <Heading
          icons={[Refill, Clipboard, Coin]}
          title='Abschleppdienst Bern.'
          subtitle='Das unerlaubte Parken auf Privatgrundstücken ist nicht nur ärgerlich, sondern kann auch rechtliche Konsequenzen nach sich ziehen. Als zuverlässiges Abschleppunternehmen in Bern sind wir darauf spezialisiert, Falschparker auf Privatgrundstücken zu entfernen, um unseren Kunden den rechtmäßigen Zugang zu ihren Parkplätzen zu gewährleisten. Unser Team steht Ihnen rund um die Uhr zur Verfügung und bietet schnelle und professionelle Abschleppdienste.'
        />
        <Content />
      </div>
    </Container>
  );
};

export default Page;
