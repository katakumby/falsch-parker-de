import React from 'react';
import { Container } from '@/components/container/container';
import Refill from '@/images/global/icons/divideIcons/refill.svg';
import Coin from '@/images/global/icons/divideIcons/coin.svg';
import Clipboard from '@/images/global/icons/divideIcons/clipboard.svg';
import { Heading } from './components/heading';
import { Content } from './components/content';
import { buildLocationMetadata } from '@/utils/metadata';

export const metadata = buildLocationMetadata('Luzern');

const Page = () => {
  return (
    <Container>
      <div className='my-20 grid gap-y-40 max-md:my-10 max-md:gap-y-20'>
        <Heading
          icons={[Refill, Clipboard, Coin]}
          title='Abschleppdienst Luzern'
          subtitle='Unerlaubtes Parken auf Privatgrundstücken stellt eine Straftat dar und kann sowohl strafrechtliche als auch zivilrechtliche Folgen haben. Als Abschleppunternehmen in Luzern sind wir darauf spezialisiert, Falschparker auf Privatgrundstücken zu beseitigen, Unannehmlichkeitsentschädigungen auszusprechen und unseren Kunden den legalen Zugang zu ihren Parkplätzen zu ermöglichen. Unsere Abschleppdienste in Luzern sind schnell, zuverlässig, professionell und rund um die Uhr für Sie da.'
        />
        <Content />
      </div>
    </Container>
  );
};

export default Page;
