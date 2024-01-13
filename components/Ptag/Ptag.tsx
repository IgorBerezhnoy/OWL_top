import React, {JSX} from 'react';
import {PtagProps} from '@/components/Ptag/Ptag.props';
import s from './Ptag.module.css';

export const Ptag = ({children, size = 'middle'}: PtagProps): JSX.Element => {
  return <p className={s[size]}>{children}</p>;
};


