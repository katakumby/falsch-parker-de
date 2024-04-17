import React from 'react';
import { Container } from '@/components/container/container';
import Refill from '@/images/global/icons/divideIcons/refill.svg';
import Coin from '@/images/global/icons/divideIcons/coin.svg';
import Clipboard from '@/images/global/icons/divideIcons/clipboard.svg';
import { Heading } from './components/heading';
import { Content } from './components/content';
import { buildLocationMetadata } from '@/utils/metadata';

export const metadata = buildLocationMetadata('St. Gallen');

const Page = () => {
  return (
    <Container>
      <div className='my-20 grid gap-y-40 max-md:my-10 max-md:gap-y-20'>
        <Heading
          icons={[Refill, Clipboard, Coin]}
          title='Abschleppservice St.Gallen'
          subtitle='Das unbefugte Parken auf Privatgrundstücken kann nicht nur zu Ärger führen, sondern auch rechtliche Konsequenzen haben. Als verlässlicher Abschleppdienst in St. Gallen sind wir darauf spezialisiert, Falschparker zu entfernen und Ihren Parkplatz frei zu halten. Unser Team bietet schnelle und professionelle Abschleppdienste, damit Sie sich keine Sorgen um unerwünschte Fahrzeuge machen müssen.'
        />
        <Content />
      </div>
    </Container>
  );
};

export default Page;
