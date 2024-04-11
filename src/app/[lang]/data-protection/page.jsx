import React from 'react';
import { Container } from '@/components/container/container';
import { DataProtectionArticle } from '@/app/[lang]/data-protection/components/dataProtectionArticle';

const DataProtectionPage = () => {
  return (
    <Container>
      <DataProtectionArticle />
    </Container>
  );
};

export default DataProtectionPage;
