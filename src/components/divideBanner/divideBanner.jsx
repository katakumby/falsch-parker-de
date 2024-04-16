import React from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import { SectionTitle } from '@/components/sectionTitle/sectionTitle';
import cl from 'classnames';

export const DivideBanner = ({
  sectionTitles,
  title,
  subtitle,
  images,
  subtitleClassName = '',
}) => {
  return (
    <>
      {sectionTitles?.length && (
        <div className='flex flex-wrap gap-2 pb-3'>
          {sectionTitles.map((title, index) => (
            <SectionTitle title={title} key={index} />
          ))}
        </div>
      )}
      <div className='border-b border-black pb-14 text-6xl max-md:pb-8 max-md:text-2xl'>
        {title}
      </div>
      <div className='flex pt-14 max-md:pt-8'>
        <div className='flex w-1/2 items-start max-md:w-[35%]'>
          {images?.length &&
            images.map((src, index) => {
              if (index === 0) {
                return (
                  <Image
                    key={uuidv4()}
                    src={src}
                    className='h-[60px] w-[60px] max-md:h-[36px] max-md:w-[36px]'
                    alt='EyeIcon'
                  />
                );
              } else {
                return (
                  <Image
                    key={uuidv4()}
                    src={src}
                    className={`ml-[-20px] h-[60px] w-[60px] max-md:ml-[-10px] max-md:h-[36px] max-md:w-[36px]`}
                    style={{ zIndex: -index }}
                    alt='FormIcon'
                  />
                );
              }
            })}
        </div>
        <div className='flex w-1/2 justify-end max-md:w-[65%]'>
          <span
            className={cl(
              'text-3xl text-[#0D0F11] max-md:text-sm',
              subtitleClassName
            )}>
            {subtitle}
          </span>
        </div>
      </div>
    </>
  );
};
