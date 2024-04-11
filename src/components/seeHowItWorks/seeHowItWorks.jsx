'use client';
import React from 'react';
import { Element } from 'react-scroll';

export const SeeHowItWorks = ({ targetRef = null }) => {
  console.log();
  return (
    <>
      {targetRef ? (
        <Element name={targetRef}>
          <h1 className='mb-20 mt-[170px] p-0 text-8xl text-dark max-md:mb-10 max-md:mt-[100px] max-md:text-[40px]'>
            See how <br /> it works.
          </h1>
        </Element>
      ) : (
        <h1 className='mb-20 mt-[170px] p-0 text-8xl text-dark max-md:mb-10 max-md:mt-[100px] max-md:text-[40px]'>
          See how <br /> it works.
        </h1>
      )}
    </>
  );
};
