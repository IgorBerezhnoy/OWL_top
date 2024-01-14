import React, {JSX} from 'react';
import s from './Ptag.module.css';
import classNames from 'classnames';
import {PtagProps} from '@/components/Ptag/Ptag.props';

export const Ptag = ({children, className, size = 'middle', ...rest}: PtagProps): JSX.Element => {
  return <p {...rest} className={classNames(s[size], className)}>{children}</p>;
};


