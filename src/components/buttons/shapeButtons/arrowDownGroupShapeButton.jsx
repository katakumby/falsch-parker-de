import React from 'react';
import cl from 'classnames';
import style from './style.module.scss';
import { ArrowDown } from '@/components/icons/arrowDown';

export const ArrowDownGroupShapeButton = ({ className }) => {
  return (
    <div className='absolute bottom-[-10px] right-[-10px]'>
      <button className={cl(style.ArrowButtonGroupShapeButton, `${className}`)}>
        <ArrowDown className='text-light transition duration-500 ease-in-out group-hover:scale-125' />
      </button>
    </div>
  );
};
