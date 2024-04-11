'use client';

import React from 'react';
import { Element } from 'react-scroll';
import { Container } from '@/components/container/container';
import { SeeHowItWorks } from '@/components/seeHowItWorks/seeHowItWorks';
import { Claim } from '@/components/claim/claim';
import { AppDescription } from '@/components/appDescription/appDescription';

export const HowItWorksFirstSection = () => {
  return (
    <Container>
      <Element name='howItWorks'>
        <SeeHowItWorks />
      </Element>
      <AppDescription />
      <Claim />
    </Container>
  );
};
