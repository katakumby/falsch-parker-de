import React from 'react';
import { Input } from './components';

const Heading = () => {
  return (
    <section className='my-20 flex flex-col gap-10 max-lg:my-10 max-lg:gap-8'>
      <h1 className='text-8xl leading-none max-lg:text-4xl'>
        Neueste Nachrichten und Artikel
      </h1>
      <div className='h-1 border-b border-dark'></div>
      <div className='flex justify-between gap-10 max-lg:contents max-lg:flex-col-reverse'>
        <Input
          action='Abonnieren'
          placeholder='Geben sie ihre E-Mail Adresse ein'
        />
        <p className='text-[32px] max-lg:text-sm'>
          Entdecken Sie die neuesten <br /> Updates zu unserer App, unserer
          <br />
          Dienstleistung und vieles mehr.
        </p>
      </div>
    </section>
  );
};

export { Heading };
