import React from 'react';
import style from '@/components/buttons/shapeButtons/style.module.scss';
import { ArrowDown } from '@/components/icons/arrowDown';
export const ArrowDownShapeButton = ({
  className,
  onClick,
  isLightTheme = false,
}) => {
  const darkTheme =
    'text-light transition duration-300 ease-in-out group-hover:translate-y-1 group-hover:scale-125';
  const lightTheme =
    'text-dark transition duration-300 ease-in-out group-hover:translate-y-1 group-hover:scale-125';

  return (
    <div className='absolute bottom-[-10px] right-[-10px]'>
      <div className={style.ArrowButtonGroupShapeButton}>
        <button
          onClick={onClick}
          className={`group flex h-full w-full items-center justify-center rounded-full ${className}`}>
          <ArrowDown className={isLightTheme ? lightTheme : darkTheme} />
        </button>
      </div>
    </div>
  );
};
