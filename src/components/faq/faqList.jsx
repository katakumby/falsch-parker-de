'use client';
import React, { useState } from 'react';
import { Dash } from '@/components/icons/dash';
import { Cross } from '@/components/icons/cross';

const Item = ({ item, isActive, onSetActive }) => {
  return (
    <div
      className={`cursor-pointer border-b border-dark/20 duration-500 ${isActive ? 'rounded-card bg-white' : 'bg-transparent'} pt-6`}
      onClick={onSetActive}>
      <div className='w-full pb-6 text-left focus:outline-none'>
        <div className='flex items-center'>
          <div className='relative flex items-center justify-center px-7'>
            <div className='absolute'>
              <Dash
                className={`${
                  isActive ? 'opacity-100' : 'opacity-0'
                } transform text-[20px] text-dark transition-opacity duration-500 ease-in-out`}
              />
            </div>
            <div className='absolute'>
              <Cross
                className={`${
                  isActive ? 'opacity-0' : 'opacity-100'
                } transform text-[20px] text-dark transition-opacity duration-500 ease-in-out`}
              />
            </div>
          </div>
          <span className='pr-3 max-md:text-xl md:text-2xl lg:text-[28px]'>
            {item.title}
          </span>
        </div>
      </div>
      <div
        className={`transition-max-height overflow-hidden duration-500 ease-in-out ${isActive ? 'max-h-96' : 'max-h-0'}`}>
        <div className='max-md:text-text-xl pb-6 text-dark/50 max-md:px-5 max-md:text-lg max-sm:text-base md:pl-[88px] md:text-xl'>
          {item.content}
        </div>
      </div>
    </div>
  );
};

const ListItems = ({ items }) => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const handleSetActive = (index) => {
    setActiveIndexes((currentActiveIndexes) => {
      if (currentActiveIndexes.includes(index)) {
        return currentActiveIndexes.filter((i) => i !== index);
      } else {
        return [...currentActiveIndexes, index];
      }
    });
  };

  return (
    <div className='flex flex-col gap-[68px]'>
      {items.map((item, index) => (
        <Item
          key={index}
          item={item}
          isActive={activeIndexes.includes(index)}
          onSetActive={() => handleSetActive(index)}
        />
      ))}
    </div>
  );
};

export const FaqList = ({ faqList }) => {
  return (
    <div className='w-full'>
      <ListItems items={faqList} />
    </div>
  );
};
