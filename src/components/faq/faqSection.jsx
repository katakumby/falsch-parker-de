'use client';

import React, { useState } from 'react';
import { SectionTitle } from '@/components/sectionTitle/sectionTitle';
import { Container } from '@/components/container/container';
import { ArrowDotButton } from '@/components/buttons/arrowDotButton';
import { FaqList } from './faqList';
import { Modal } from '@/components/modal/modal';
import { AskForm } from '@/components/faq/askForm';
import { defaultData } from '@/components/faq/faqData';

export const FaqSection = ({ data = defaultData }) => {
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

        <h4 className='mb-20 max-md:text-3xl md:text-8xl lg:text-9xl'>
          Sie fragen,
          <br />
          wir antworten.
        </h4>

        <div className='w-full'>
          <FaqList faqList={data} />
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
