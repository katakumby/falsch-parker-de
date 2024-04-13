'use client';

import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { ArrowRight } from '@/components/icons/arrowRight';
import Play from '@/images/towing-service/play.svg';
import Shield from '@/images/towing-service/shield.svg';
import { OurServices } from '@/app/[lang]/location/zurich/components/ourServices';
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
              <h6 className='mb-6 text-dark/50'>Unser Vorgehen</h6>
              <p>
                Sobald wir von einem Parkproblem auf Ihrem Grundstück erfahren,
                reagieren wir sofort und entfernen das unberechtigt parkende
                Fahrzeug. Wir koordinieren uns sorgfältig mit den lokalen
                Behörden, um alle notwendigen Schritte zu unternehmen. Dabei
                achten wir darauf, dass alle rechtlichen Vorgaben eingehalten
                werden und Ihre Interessen geschützt sind.
              </p>
            </div>
          </div>
        </div>
        <div className='relative h-card flex-1 max-lg:col-span-2 max-md:h-cardMobile'>
          <div className='flex h-full flex-col justify-between overflow-hidden rounded-[40px] bg-white bg-greenGradient p-12 !pb-0 max-lg:rounded-card max-md:p-6'>
            <div className='text-xl text-white max-2xl:text-xl max-xl:text-lg max-lg:text-2xl max-md:text-xl max-sm:text-lg max-[550px]:text-base max-[420px]:text-sm'>
              <h6 className='mb-6 opacity-50'>Unsere Garantie</h6>
              <p>
                Als Abschleppunternehmen in Winterthur legen wir Wert auf
                schnelle Reaktionszeiten, Zuverlässigkeit und Professionalität.
                Wir wissen, wie wichtig ein freier Parkplatz für Sie ist, und
                setzen uns dafür ein, dass Sie jederzeit Zugang zu Ihrem
                Parkplatz haben. Mit unserem Service brauchen Sie sich keine
                Gedanken über unbefugte Fahrzeuge machen.
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
                <h1 className='text-7xl'>Fazit.</h1>
                <p>
                  Wenn Sie mit dem Problem des unberechtigten Parkens auf Ihrem
                  Privatgrundstück in Winterthur konfrontiert sind, können Sie
                  auf unseren Abschleppservice zählen. Wir bieten schnelle und
                  effiziente Lösungen, um Falschparker zu entfernen und Ihre
                  Parkplätze frei zu halten. Kontaktieren Sie uns noch heute, um
                  mehr über unsere Dienstleistungen zu erfahren und gemeinsam
                  eine Lösung zu finden.
                </p>
              </div>
            </div>
            <div className='flex h-full w-full flex-col text-white lg:hidden'>
              {!isConclusionText ? (
                <>
                  <div className='flex items-center p-12 pb-0 pt-14'>
                    <h3 className='-mb-10 text-4xl sm:text-6xl'>Fazit.</h3>
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
                <div className='flex h-full flex-col justify-center gap-10 p-12  max-sm:p-4 sm:gap-3'>
                  <h3 className='text-4xl sm:text-4xl'>Fazit.</h3>
                  <p>
                    Wenn Sie mit dem Problem des unberechtigten Parkens auf
                    Ihrem Privatgrundstück in Winterthur konfrontiert sind,
                    können Sie auf unseren Abschleppservice zählen. Wir bieten
                    schnelle und effiziente Lösungen, um Falschparker zu
                    entfernen und Ihre Parkplätze frei zu halten. Kontaktieren
                    Sie uns noch heute, um mehr über unsere Dienstleistungen zu
                    erfahren und gemeinsam eine Lösung zu finden.
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
