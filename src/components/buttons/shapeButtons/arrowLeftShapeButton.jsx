import React from 'react';
import style from '@/components/buttons/shapeButtons/style.module.scss';
import { ArrowLeft } from '@/components/icons/arrowLeft';
export const ArrowLeftShapeButton = ({
  className,
  onClick,
  isLightTheme = false,
}) => {
  const darkTheme =
    'text-light transition duration-300 ease-in-out group-hover:-translate-x-1 group-hover:scale-125';
  const lightTheme =
    'text-dark transition duration-300 ease-in-out group-hover:-translate-x-1 group-hover:scale-125';

  return (
    <div className='absolute bottom-[-10px] right-[-10px]'>
      <div className={style.ArrowButtonGroupShapeButton}>
        <button
          onClick={onClick}
          className={`group flex h-full w-full items-center justify-center rounded-full ${className}`}>
          <ArrowLeft className={isLightTheme ? lightTheme : darkTheme} />
        </button>
      </div>
    </div>
  );
};
