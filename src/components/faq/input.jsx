import React from 'react';
import cl from 'classnames';

const Input = ({ fill = false, placeholder, type = 'text' }) => {
  return (
    <div className={cl('inline-block align-text-top', fill ? 'w-full' : '')}>
      <input
        placeholder={placeholder}
        type={type}
        className='h-[60px] w-full rounded-full border border-dark px-6 text-base placeholder-dark/50 outline-none placeholder-shown:truncate focus:placeholder-transparent max-lg:h-[40px]'
      />
    </div>
  );
};

export { Input };
