import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import cl from 'classnames';
import { headerNavigation } from '@/utils/navigations';
import { useClientTranslation } from '@/app/i18n/client';
import { PayFineButton } from '@/components/buttons/payFineButton';

export const MobileMenu = ({ isMobileMenuOpen, onClose, lang }) => {
  const pathname = usePathname();
  const { t } = useClientTranslation(lang, 'header');

  return (
    <div
      className={`fixed left-0 top-[75px] z-[1100] flex h-full w-full items-center justify-center bg-opacity-75 transition-opacity duration-300`}
      style={{
        width: '100%',
        height: '100%',
        opacity: isMobileMenuOpen ? 1 : 0,
        visibility: isMobileMenuOpen ? 'visible' : 'hidden',
        top: '75px',
        transition: 'all 0.3s ease-in-out',
      }}>
      <div className='flex h-lvh w-lvw justify-center bg-black/50 backdrop-blur-xl'>
        <div className='absolute z-[10] flex w-full flex-col items-center gap-2 self-start bg-[#F5F7F9] p-4'>
          <ul className='flex flex-col gap-2'>
            {headerNavigation.map((item) => (
              <li key={item.name} className='flex flex-col gap-2'>
                {item.href === undefined ? (
                  <span className='w-fit p-0 text-base font-light'>
                    {t(item.name)}
                  </span>
                ) : (
                  <Link
                    href={`/${lang}${item.href}`}
                    onClick={onClose}
                    className={cl(
                      'w-fit p-0 text-base font-light text-[#0D0F11] duration-200 hover:text-[#28282880]',
                      pathname === `/${lang}${item.href}`
                        ? 'drop-shadow-[0_0.5px_0_#000]'
                        : ''
                    )}>
                    {t(item.name)}
                  </Link>
                )}
                <div
                  className='w-303 h-1 bg-gray-300 bg-opacity-10'
                  style={{
                    width: '303px',
                    height: '1px',
                    background: 'rgba(13, 15, 17, 0.10)',
                  }}
                />
              </li>
            ))}
          </ul>
          <PayFineButton text='Pay fine' width='303px' height='51px' />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
