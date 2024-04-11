import React from 'react';
import { footerLinks } from '@/components/footer/links';
import { FooterLink } from '@/components/footer/components/footerLink';
import { AppButton } from '@/components/buttons/appButton';
import { Apple } from '@/components/icons/apple';
import { Android } from '@/components/icons/android';

const DesktopLinks = ({ lang }) => {
  return (
    <div className='grid flex-1 grid-flow-col grid-cols-[repeat(3,_auto)] grid-rows-[repeat(2,_min-content)] justify-between gap-x-10 gap-y-10 font-light max-xl:grid-cols-[repeat(2,_auto)] max-xl:grid-rows-[repeat(3,_min-content)] max-lg:hidden'>
      {footerLinks.map((section) => (
        <div className='flex flex-col gap-2' key={section.title}>
          <span className='text-2xl'>{section.title}</span>
          {section.links.map((link) => (
            <FooterLink
              key={link.title}
              href={
                link.href !== undefined ? `/${lang}${link.href}` : undefined
              }>
              {link.title}
            </FooterLink>
          ))}
        </div>
      ))}
      <div className='flex flex-col gap-2'>
        <span className='mb-3 text-2xl'>Our app</span>
        <AppButton href='/' icon={Apple}>
          App Store
        </AppButton>
        <AppButton href='/' icon={Android}>
          Google Play
        </AppButton>
      </div>
    </div>
  );
};

export { DesktopLinks };
