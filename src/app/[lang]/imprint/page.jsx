import React from 'react';
import { Container } from '@/components/container/container';
import { ImprintArticle } from '@/app/[lang]/imprint/components/imprintArticle';
import { buildMetadata } from '@/utils/metadata';

export const metadata = buildMetadata('imprint');

const ImprintPage = () => {
  return (
    <Container>
      <ImprintArticle />
    </Container>
  );
};

export default ImprintPage;
