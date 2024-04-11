import React from 'react';
import { Input } from './components';

const Heading = () => {
  return (
    <section className='my-20 flex flex-col gap-10 max-lg:my-10 max-lg:gap-8'>
      <div className='text-[126px] leading-none max-lg:text-4xl'>
        Latest news
      </div>
      <div className='h-1 border-b border-dark'></div>
      <div className='flex justify-between max-lg:contents max-lg:flex-col-reverse'>
        <Input action='Subscribe' placeholder='Enter your email' />
        <p className='text-[32px] max-lg:text-sm'>
          Discover the latest updates about
          <br /> our app, services and so on
        </p>
      </div>
    </section>
  );
};

export { Heading };
