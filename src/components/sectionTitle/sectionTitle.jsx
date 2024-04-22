import React from 'react';

export const SectionTitle = ({ title }) => {
  return (
    <span className='self-start whitespace-nowrap rounded-full border border-[#0D0F11] px-5 py-2 text-[#0D0F11]'>
      {title}
    </span>
  );
};
