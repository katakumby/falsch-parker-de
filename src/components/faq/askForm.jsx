import React from 'react';
import { SectionTitle } from '@/components/sectionTitle/sectionTitle';
import { Input } from '@/components/faq/input';

const AskForm = () => {
  return (
    <div className='grid gap-y-9'>
      <div>
        <SectionTitle title='Ask question' />
      </div>
      <form className='outline-none'>
        <div className='text-7xl leading-[1.1] max-lg:text-4xl'>
          Hello!
          <br />
          My name is <Input placeholder='Enter your name here' />, here is my
          email <Input placeholder='Enter your email here' type='email' />. I
          want to ask <Input fill placeholder='Describe your question here' />
        </div>
      </form>
    </div>
  );
};

export { AskForm };
