import React from 'react';
import { Container } from '@/components/container/container';
import { SectionTitle } from '@/components/sectionTitle/sectionTitle';
import { WhatClientsSay } from '@/components/whatClientsSay/whatClientsSay';
import { JoinSection } from '@/app/[lang]/home/components/sections/components/testimonialsSections/joinSection';
import User1 from '@/images/home-page/user_1.png';
import User2 from '@/images/home-page/user_2.png';
import User3 from '@/images/home-page/user_3.png';

const usersInfo = [
  {
    userImage: User1,
    userName: 'John Smith',
    userInfo: 'Facility Manager, GreenTech Solutions',
    userComment:
      "“The Falsch-Parker app has revolutionized our parking space management. It's user-friendly and incredibly efficient. Since we started using it, illegal parking issues have dropped significantly.”",
  },
  {
    userImage: User2,
    userName: 'Emily Johnson',
    userInfo: 'Head of Operations, Urban Real Estate',
    userComment:
      '“Implementing this app in our residential complexes has been a game changer. The ease of reporting and processing claims has made parking enforcement much simpler and more effective.”',
  },
  {
    userImage: User3,
    userName: 'Mark Lee',
    userInfo: 'Security Supervisor, Downtown Mall',
    userComment:
      '“Implementing this app in our residential complexes has been a game changer. The ease of reporting and processing claims has made parking enforcement much simpler and more effective.”',
  },
];

export const TestimonialsSection = () => {
  return (
    <Container>
      <div className='mb-[170px] max-md:mb-[100px]'>
        <div className='mb-9'>
          <SectionTitle title='Testimonials' />
        </div>
        <WhatClientsSay usersInfo={usersInfo} />
      </div>
      <div className='mb-20'>
        <JoinSection />
      </div>
    </Container>
  );
};
