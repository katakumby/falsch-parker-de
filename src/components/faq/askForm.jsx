import React from 'react';
import { SectionTitle } from '@/components/sectionTitle/sectionTitle';
import { Input } from '@/components/faq/input';

const AskForm = () => {
  return (
    <div className='grid gap-y-9'>
      <div>
        <SectionTitle title='Stellen Sie ihre Frage' />
      </div>
      <form className='outline-none'>
        <div className='text-7xl leading-[1.1] max-lg:text-4xl'>
          Hello!
          <br />
          Mein Name ist <Input placeholder='Ihr name' />, das ist meine E-Mail{' '}
          <Input placeholder='E-Mail eingeben' type='email' />. Ich habe
          folgende Frage <Input fill placeholder='Stellen Sie Ihre Frage' />
        </div>
      </form>
    </div>
  );
};

export { AskForm };
