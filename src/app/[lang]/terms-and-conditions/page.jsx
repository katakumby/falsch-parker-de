import React from 'react';
import { Container } from '@/components/container/container';
import { TermsAndConditionsArticle } from '@/app/[lang]/terms-and-conditions/components/termsAndConditionsArticle';

const TermsAndConditionsPage = () => {
  return (
    <Container>
      <TermsAndConditionsArticle />
    </Container>
  );
};

export default TermsAndConditionsPage;
