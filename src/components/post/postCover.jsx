import React from 'react';
import Image from 'next/image';
import { ArrowRight } from '@/components/icons/arrowRight';
import { Chip } from '@/components/chips/chip';
import { RoundButton } from '@/components/buttons/roundButton';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { ArrowDown } from '@/components/icons/arrowDown';

const PostCover = ({ imageUrl, tag, time, title, synopsis, href, scroll }) => {
  return (
    <div className='relative overflow-hidden'>
      <div className='relative h-[730px] w-full overflow-hidden rounded-[40px] text-white max-lg:h-[580px] max-lg:rounded-card'>
        <Image src={imageUrl} alt='banner' fill className='object-cover' />
        <div className='absolute bottom-0 flex w-full flex-col gap-5 rounded-t-[40px] bg-dark/50 p-10 backdrop-blur-xl max-lg:rounded-t-card max-lg:p-6'>
          <div className='flex items-center justify-between gap-4'>
            <Chip small>{tag}</Chip>
            <span className='text-base max-lg:text-xs'>{time} min read</span>
          </div>
          <span className='text-4xl leading-tight max-lg:text-2xl'>
            {title}
          </span>
          <p className='pr-14 text-xl font-light opacity-50 max-lg:text-base'>
            {synopsis}
          </p>
        </div>
      </div>
      <CornerButtonContainer>
        <RoundButton
          theme='dark'
          href={href}
          icon={scroll ? ArrowDown : ArrowRight}
          animation={
            scroll
              ? 'group-hover:translate-y-1 group-hover:scale-125'
              : 'group-hover:-rotate-45 group-hover:scale-125'
          }
        />
      </CornerButtonContainer>
    </div>
  );
};

export { PostCover };
