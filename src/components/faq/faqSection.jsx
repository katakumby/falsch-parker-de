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
      'Ist die Nutzung des Dienstes vollständig kostenlos, und entstehen den Benutzern zusätzliche Kosten?',
    content:
      'Ja, die Nutzung des Dienstes ist vollständig kostenlos, und es entstehen keinerlei zusätzliche Kosten für die Benutzer.',
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
              Stellen Sie Ihre Frage
            </ArrowDotButton>
          </div>
        </div>

        <h5 className='mb-20 max-md:text-3xl md:text-8xl lg:text-9xl'>
          Sie fragen,
          <br />
          wir antworten.
        </h5>

        <div className='w-full'>
          <FaqList faqList={faqList} />
        </div>

        <div className='mt-10 hidden w-full justify-center max-sm:flex'>
          <ArrowDotButton
            onClick={() => setIsOpenAskQuestion(true)}
            theme='dark'>
            Stellen Sie Ihre Frage
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
