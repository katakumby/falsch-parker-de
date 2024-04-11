import React, { useState } from 'react';
import { OpenArrow } from '@/components/icons/openArrow';
import { footerLinks } from '@/components/footer/links';
import { FooterLink } from '@/components/footer/components/footerLink';
import cl from 'classnames';

const MobileLinks = ({ lang }) => {
  const [activeTab, setActiveTab] = useState('');

  const toggleTab = (title) => {
    setActiveTab((current) => (current === title ? '' : title));
  };

  return (
    <div className='flex flex-col lg:hidden'>
      {footerLinks.map(
        (section) =>
          section.title !== 'Offices' && (
            <div
              className='group border-b border-white/10 last:border-none'
              key={section.title}>
              <button
                className='flex min-h-[35px] w-full items-center justify-between py-4'
                onClick={() => toggleTab(section.title)}>
                <span className='text-xl'>{section.title}</span>
                <div className='flex h-[35px] w-[35px] items-center justify-center'>
                  <OpenArrow
                    className={cl(
                      'transition-transform duration-300',
                      activeTab === section.title ? 'rotate-180' : ''
                    )}
                  />
                </div>
              </button>
              <div
                className={cl(
                  'grid grid-rows-[0fr] transition-[grid-template-rows] duration-300',
                  activeTab === section.title ? 'grid-rows-[1fr]' : ''
                )}>
                <div className='overflow-hidden'>
                  <div className='mb-6 flex flex-col gap-3'>
                    {section.links.map((link) => (
                      <FooterLink
                        key={link.title}
                        href={
                          link.href !== undefined
                            ? `/${lang}${link.href}`
                            : undefined
                        }>
                        {link.title}
                      </FooterLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export { MobileLinks };
