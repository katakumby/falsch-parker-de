import React from 'react';
import style from '@/components/buttons/shapeButtons/style.module.scss';

export const ShapeHeaderButtons = ({ onClick }) => {
  return (
    <div className='absolute right-0 top-0 bg-light'>
      <div className={style.shapeHeaderButtons}></div>
    </div>
  );
};
