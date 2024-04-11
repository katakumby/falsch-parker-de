import React from 'react';
import Image from 'next/image';

export const DesktopCustomerReview = ({
  userImage,
  userName,
  userInfo,
  userComment,
}) => {
  return (
    <div className='w-full'>
      <span className='max-md:text-xl md:text-3xl md:leading-snug	lg:text-5xl lg:leading-tight'>
        {userComment}
      </span>
      <div className='mt-10 flex h-[50px] items-center text-dark'>
        <Image src={userImage} className='h-[44px] w-[44px]' alt='user' />
        <div className='flex flex-col justify-center pl-4'>
          <span className='text-xl'>{userName}</span>
          <span className='text-base text-dark/50'>{userInfo}</span>
        </div>
      </div>
    </div>
  );
};

export const MobileCustomerReview = ({
  userImage,
  userName,
  userInfo,
  userComment,
}) => {
  return (
    <div className='flex h-[485px] w-[325px] flex-none flex-col justify-between rounded-card bg-white p-8'>
      <span className='text-[22px]'>{userComment}</span>
      <div className='mt-10 flex h-[50px] items-center text-dark'>
        <Image src={userImage} className='h-[44px] w-[44px]' alt='user' />
        <div className='flex flex-col justify-center pl-4'>
          <span className='text-xl'>{userName}</span>
          <span className='text-base text-dark/50'>{userInfo}</span>
        </div>
      </div>
    </div>
  );
};

export const WhatClientsSay = ({ usersInfo }) => {
  return (
    <div className='h-full w-full'>
      <div className='hidden w-full rounded-card bg-white p-10 sm:flex lg:p-20'>
        <div className='w-1/3 px-3'>
          <span className='text-2xl'>
            Here's what <br />
            our clients say.
          </span>
        </div>
        <div className='flex w-2/3 flex-col gap-20'>
          {usersInfo.map((item, index) => (
            <DesktopCustomerReview
              key={index}
              userImage={item.userImage}
              userName={item.userName}
              userInfo={item.userInfo}
              userComment={item.userComment}
            />
          ))}
        </div>
      </div>

      <div className='hidden h-full w-full flex-col max-sm:flex'>
        <span className='mb-9 text-[32px]'>
          Here's what <br />
          our clients say.
        </span>

        <div className='no-scrollbar flex w-full gap-4 overflow-x-scroll pb-[10px]'>
          {usersInfo.map((item, index) => (
            <MobileCustomerReview
              key={index}
              userImage={item.userImage}
              userName={item.userName}
              userInfo={item.userInfo}
              userComment={item.userComment}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
