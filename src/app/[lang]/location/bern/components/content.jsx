'use client';

import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { ArrowRight } from '@/components/icons/arrowRight';
import Play from '@/images/towing-service/play.svg';
import Shield from '@/images/towing-service/shield.svg';
import { OurServices } from '@/app/[lang]/location/Bern/components/ourServices';
import Conclusion from '@/images/global/conclusion.png';
import { ArrowLeft } from '@/components/icons/arrowLeft';
import { Cross } from '@/components/icons/cross';

const Content = () => {
  const [isConclusionText, setIsConclusionText] = useState(false);
  const renderConclusionButton = useCallback(() => {
    return (
      <>
        <div className='lg:hidden'>
          <RoundButton
            icon={isConclusionText ? ArrowLeft : Cross}
            theme='dark'
            animation={`group-hover:scale-125 ${!isConclusionText && 'group-hover:-rotate-90'}`}
            onClick={() => setIsConclusionText((prev) => !prev)}
          />
        </div>
        <div className='max-lg:hidden'>
          <RoundButton
            icon={ArrowRight}
            theme='dark'
            animation='group-hover:-rotate-45 group-hover:scale-125'
          />
        </div>
      </>
    );
  }, [isConclusionText]);

  return (
    <>
      <div className='grid grid-cols-2 gap-4'>
        <div className='col-span-2'>
          <OurServices />
        </div>
        <div className='h-card flex-1 max-lg:col-span-2 max-md:h-cardMobile'>
          <div className='flex h-full flex-col justify-between overflow-hidden rounded-[40px] bg-white p-12 !pt-0 max-lg:rounded-card max-md:p-6'>
            <div className='relative my-auto h-[172px] w-[156px] shrink-0 self-center'>
              <Image src={Play} alt='Play' fill />
            </div>
            <div className='text-xl max-2xl:text-xl max-xl:text-lg max-lg:text-2xl max-md:text-xl max-sm:text-lg max-[550px]:text-base max-[420px]:text-sm'>
              <h6 className='mb-6 text-dark/50'>Our approach</h6>
              <p>
                Our towing service in Bern is fast and efficient. As soon as we
                are notified by a customer via the APP that there is a parking
                problem, we immediately move out to remove the vehicle. We work
                closely with local authorities to ensure we comply with all
                necessary permits and requirements. Our towing specialists are
                trained to assess the proportionality of towing and to ensure
                that all legal bases are adhered to.
              </p>
            </div>
          </div>
        </div>
        <div className='relative h-card flex-1 max-lg:col-span-2 max-md:h-cardMobile'>
          <div className='flex h-full flex-col justify-between overflow-hidden rounded-[40px] bg-white bg-greenGradient p-12 !pb-0 max-lg:rounded-card max-md:p-6'>
            <div className='text-xl text-white max-2xl:text-xl max-xl:text-lg max-lg:text-2xl max-md:text-xl max-sm:text-lg max-[550px]:text-base max-[420px]:text-sm'>
              <h6 className='mb-6 opacity-50'>Our service promise</h6>
              <p>
                As a towing company in Bern, we pride ourselves on providing our
                customers with a fast, reliable and professional service. We
                understand how frustrating it can be when someone parking
                illegally parks in your private parking space and you do not
                have access to your own parking space. That's why we work hard
                to ensure that our customers always have access to their parking
                spaces and that any illegal parking is removed quickly and
                safely.
              </p>
            </div>
            <div className='relative my-auto flex h-[172px] w-[154px] shrink-0 self-center'>
              <Image fill src={Shield} alt='shield' />
            </div>
          </div>
          <CornerButtonContainer>
            <RoundButton
              icon={ArrowRight}
              className='bg-[#63B2B3] text-light'
              animation='group-hover:-rotate-45 group-hover:scale-125'
            />
          </CornerButtonContainer>
        </div>
        <div className='relative col-span-2 h-card overflow-hidden max-md:h-cardMobile'>
          <div className='h-full overflow-hidden rounded-[40px] bg-dark max-lg:rounded-card'>
            <div className='flex h-full w-full text-white max-lg:hidden'>
              <div className='relative m-20 mb-0 h-full w-[400px] shrink-0 max-xl:m-10 max-xl:w-[300px]'>
                <Image
                  fill
                  src={Conclusion}
                  alt='conclusion'
                  className='object-contain object-bottom'
                />
              </div>
              <div className='grid flex-1 gap-y-10 self-center p-12 !pl-0 max-lg:hidden max-md:p-6'>
                <h1 className='text-7xl'>Conclusion.</h1>
                <p>
                  If you have problems with illegal parking on your private
                  property in Bern, do not hesitate to use the Fehl-Parker.ch
                  APP. We offer a fast, reliable and professional towing service
                  for illegal parking on private property to ensure you always
                  have access to your parking space. Our towing specialists are
                  trained to assess the proportionality of towing and to ensure
                  that all legal bases are adhered to. Contact us today to find
                  out more about our services or start directly with the APP via
                  app.falsch-parker.ch
                </p>
              </div>
            </div>
            <div className='flex h-full w-full flex-col text-white lg:hidden'>
              {!isConclusionText ? (
                <>
                  <div className='flex items-center p-12 pb-0 pt-14'>
                    <h3 className='-mb-10 text-4xl sm:text-6xl'>Conclusion.</h3>
                  </div>
                  <div className='relative mx-auto mt-0 h-full w-[300px] shrink-0'>
                    <Image
                      fill
                      src={Conclusion}
                      alt='conclusion'
                      className='object-contain object-bottom'
                    />
                  </div>
                </>
              ) : (
                <div className='flex h-full flex-col justify-center gap-10 p-12'>
                  <h3 className='text-4xl sm:text-6xl'>Conclusion.</h3>
                  <p>
                    If you have problems with illegal parking on your private
                    property in Bern, do not hesitate to use the Fehl-Parker.ch
                    APP. We offer a fast, reliable and professional towing
                    service for illegal parking on private property to ensure
                    you always have access to your parking space. Our towing
                    specialists are trained to assess the proportionality of
                    towing and to ensure that all legal bases are adhered to.
                    Contact us today to find out more about our services or
                    start directly with the APP via app.falsch-parker.ch
                  </p>
                </div>
              )}
            </div>
          </div>
          <CornerButtonContainer>
            {renderConclusionButton()}
          </CornerButtonContainer>
        </div>
      </div>
    </>
  );
};

export { Content };
