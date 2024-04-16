import React from 'react';
import { Container } from '@/components/container/container';
import { FaqSection } from '@/components/faq/faqSection';
import { buildMetadata } from '@/utils/metadata';
import { Products } from './components/products';

export const metadata = buildMetadata('contact');

const ContactPage = () => {
  return (
    <Container>
      <Products />
      <FaqSection />
    </Container>
  );
};

export default ContactPage;
