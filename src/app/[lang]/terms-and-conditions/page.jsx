import React from 'react';
import { Container } from '@/components/container/container';
import { TermsAndConditionsArticle } from '@/app/[lang]/terms-and-conditions/components/termsAndConditionsArticle';
import { buildMetadata } from '@/utils/metadata';

export const metadata = buildMetadata('termsAndConditions');

const TermsAndConditionsPage = () => {
  return (
    <Container>
      <TermsAndConditionsArticle />
    </Container>
  );
};

export default TermsAndConditionsPage;
