import React from 'react';
import { ArrowDotButton } from '@/components/buttons/arrowDotButton';

export const OpenAppButton = ({ onClick }) => {
  return (
    <ArrowDotButton theme='light' onClick={onClick}>
      Web-App öffnen
    </ArrowDotButton>
  );
};
