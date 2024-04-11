import React from 'react';
import style from '@/components/buttons/shapeButtons/style.module.scss';
import { Cross } from '@/components/icons/cross';

export const CrossShapeButton = ({
  className,
  onClick,
  isLightTheme = false,
}) => {
  const darkTheme =
    'text-light transition duration-500 ease-in-out group-hover:-rotate-90 group-hover:scale-110';
  const lightTheme =
    'text-dark transition duration-500 ease-in-out group-hover:-rotate-90 group-hover:scale-110';

  return (
    <div className='absolute bottom-[-10px] right-[-10px]'>
      <div className={style.ArrowButtonGroupShapeButton}>
        <button
          onClick={onClick}
          className={`group flex h-full w-full items-center justify-center rounded-full ${className}`}>
          <Cross className={isLightTheme ? lightTheme : darkTheme} />
        </button>
      </div>
    </div>
  );
};
