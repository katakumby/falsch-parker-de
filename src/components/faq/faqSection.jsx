'use client';

import React, { useState } from 'react';
import { SectionTitle } from '@/components/sectionTitle/sectionTitle';
import { Container } from '@/components/container/container';
import { ArrowDotButton } from '@/components/buttons/arrowDotButton';
import { FaqList } from './faqList';
import { Modal } from '@/components/modal/modal';
import { AskForm } from '@/components/faq/askForm';

const faqList = [
  {
    title:
      'Is the use of the service completely free of charge, and are there any additional costs for users?',
    content:
      'Absolutely, the use of our service is completely free for all users, and there are no additional fees.',
  },
  {
    title: 'Who is liable in case of disputes?',
    content:
      'We at Falsch-parker.ch take full responsibility and handle all administrative tasks.',
  },
  {
    title:
      'As a property owner or manager, do I need a judicial prohibition to have a vehicle towed?',
    content:
      'No, to have illegally parked vehicles towed, neither a judicial prohibition nor signage is required!',
  },
  {
    title:
      "Can I have a car towed if it's parked illegally on my private parking space?",
    content:
      'Yes, as long as you provide us with your lease agreement proving that you rent the parking space, and sign the necessary assignment (cession) allowing us to claim the incurred costs from the person who parked illegally.',
  },
];

export const FaqSection = () => {
  const [isOpenAskQuestion, setIsOpenAskQuestion] = useState(false);

  return (
    <Container>
      <div className='my-[172px] h-full max-md:my-[100px]'>
        <div className='mb-9 flex items-center justify-between'>
          <div>
            <SectionTitle title='FAQ' />
          </div>
          <div className='flex w-full justify-end max-sm:hidden'>
            <ArrowDotButton
              onClick={() => setIsOpenAskQuestion(true)}
              theme='dark'>
              Ask your question
            </ArrowDotButton>
          </div>
        </div>

        <h5 className='mb-20 max-md:text-3xl md:text-8xl lg:text-9xl'>
          You asked, <br />
          we answer.
        </h5>

        <div className='w-full'>
          <FaqList faqList={faqList} />
        </div>

        <div className='mt-10 hidden w-full justify-center max-sm:flex'>
          <ArrowDotButton
            onClick={() => setIsOpenAskQuestion(true)}
            theme='dark'>
            Ask your question
          </ArrowDotButton>
        </div>
      </div>
      <Modal
        isOpen={isOpenAskQuestion}
        onClose={() => setIsOpenAskQuestion(false)}>
        <AskForm />
      </Modal>
    </Container>
  );
};
