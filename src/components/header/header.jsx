'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cl from 'classnames';
import { usePathname } from 'next/navigation';
import { useClientTranslation } from '@/app/i18n/client';
import { headerNavigation } from '@/utils/navigations';
import Logo from '@/images/home-page/logo.svg';
import { Container } from '@/components/container/container';
import { PayFineButton } from '@/components/buttons/payFineButton';
import MobileMenu from '@/components/mobileMenu/mobileMenu';
import ArrowDown from '@/images/global/icons/arrowDown.svg';
import { Phone } from '@/components/icons/phone';

const Header = ({ lang }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useClientTranslation(lang, 'header');
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <div
        className={`fixed top-0 z-[1000] flex h-[75px] w-full bg-[#F5F7F9] bg-[#F5F7F9]/80 backdrop-blur-xl duration-300 `}>
        <Container>
          <div className='flex items-center justify-between'>
            <div className='relative h-[40px] w-[100px] shrink-0 max-lg:h-[35px] max-lg:w-[80px]'>
              <Link href={`/home`} className=''>
                <Image
                  src={Logo}
                  fill
                  alt='Falsch-parker logo'
                  className='object-contain'
                />
              </Link>
            </div>
            <div className='flex w-full items-center justify-center max-lg:hidden'>
              <ul className='flex w-full max-w-[650px] justify-between'>
                {headerNavigation.map((item) => (
                  <li key={item.name}>
                    {item.href === undefined ? (
                      <span className='p-2 text-base font-light text-[#0D0F11]'>
                        {t(item.name)}
                      </span>
                    ) : (
                      <Link
                        href={`/${lang}${item.href}`}
                        className={cl(
                          'p-2 text-base font-light text-[#0D0F11] duration-200 hover:text-[#28282880]',
                          pathname === `/${lang}${item.href}`
                            ? 'drop-shadow-[0_0.5px_0_#000]'
                            : ''
                        )}>
                        {t(item.name)}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className='max-lg:block lg:hidden'>
              <div className='flex flex-row items-center'>
                <button onClick={toggleMobileMenu} className='mr-3 p-2'>
                  <Image
                    src={ArrowDown}
                    alt='Arrow Header'
                    className='duration-200'
                    style={{
                      transform: `rotate(${isMobileMenuOpen ? '180deg' : '0deg'})`,
                    }}
                  />
                </button>
                <button className='flex h-[35px] w-[35px] items-center justify-center gap-2 rounded-full bg-[#05D54B] p-2'>
                  <Phone className={'text-white'} />
                </button>
              </div>
            </div>
            <div className='shrink-0 max-lg:hidden'>
              <PayFineButton />
            </div>
          </div>
        </Container>
      </div>
      <div className='max-lg:block lg:hidden'>
        <MobileMenu
          onClose={toggleMobileMenu}
          lang={lang}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      </div>
    </header>
  );
};

export default Header;
